<?php
/**
 * Database.php
 */

include_once '../core/Utils.php';

class Database {
  protected static mysqli $DB;
  private function __construct() {}


  /**
   * Parses the .env file and returns required environment variables.
   */
  public static function loadEnv(string $envPath = "../.env"): array | null{
    $path = realpath(dirname(__DIR__) . '/' . $envPath);

    if(!file_exists($path)){
      error_log("Error the .env file not found at the path: " . $path);
      return null;
    }

    try {
      return parse_ini_file($path);
    } catch (\Throwable $th) {
      error_log("Error parsing the .env file at $path: " . $th->getMessage());
      return null;
    }
  }

  /**
   * Initialize database and returns the db itself.
   */
  public static function initDb(
    string $db = '',
    string $charset = 'utf8mb4'
  ): mysqli | null {

    $requiredEnv = self::loadEnv();
    
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    try { 
      $db = new mysqli(
        $requiredEnv['DB_HOST'], 
        $requiredEnv['DB_USERNAME'],
        $requiredEnv['DB_PASSWORD'],
        $requiredEnv['DB_DATABASE'],
        $requiredEnv['DB_PORT']
      );
      $db->set_charset($charset);
      $db->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);
      self::$DB = $db;
      return $db;
    } catch (\Throwable $th) {
      error_log("Error initializing database: ". $th->getMessage());
      return null;
    }
  }

  public static function getDb(): mysqli | null {
    if(!isset(self::$DB)) {
      self::initDb();

      if(!self::$DB) {
        error_log("Error failed to initialize DB connection.");
        return null;
      }
    }
    return self::$DB;
  }

  public static function specificQuery(string $query, string ...$arguments): bool | null {
    if(!isset(self::$DB)) {
      self::initDb();
    }

    try {
      $stmt = self::$DB->prepare($query);
      $types = getBindParamTypes($arguments);
      $stmt->bind_param($types, $arguments);
      return $stmt->execute();
    } catch (\mysqli_sql_exception $e) {
        error_log("Error querying to database: " . $e->getMessage());
        return null;
    }
  }

  public static function prepareQuery(string $query): bool | null {
    if(!isset(self::$DB)) {
      self::initDb();
    }

    try {
      return self::$DB->query($query);
    } catch (\mysqli_sql_exception $e) {
      error_log("error querying to database: ". $e->getMessage());
      return null;
    }
  }
}
