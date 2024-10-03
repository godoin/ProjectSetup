<?php

require_once './Database.php';

function setupEnv(string $envPath = "../.env"): array {
    if (file_exists($envPath)) {
        return [
            'status' => true,
            'path' => $envPath
        ];
    } else {
        return [
            'status' => false,
            'path' => $envPath
        ];
    }
}

function startMigration(string $sqlPath = "assets/OnlineStore.sql"): bool | null {
    $fullPath = realpath(dirname(__DIR__) . '/' . $sqlPath);

    if(!file_exists($fullPath)) {
        error_log("Error the .sql is not found at the path: " . $fullPath);
    }

    $db = Database::getDb();

    try {
        $sql = file_get_contents($fullPath);
        $result = $db->multi_query($sql);

        if($result) {
            echo "Database migration completed succesfully...";
            return true;
        } else {
            error_log("Error executing SQL from file: ". $db->error);
            return false;
        }
    } catch (\mysqli_sql_exception $e) {
        error_log("Error query to database: ". $e->getMessage());
        return null;
    }
}



$result = setupEnv();

if (!$result['status']) { 
    echo "Error fetching .env from {$result['path']}. Please ensure all fields are filled.";
} else {
    $result = startMigration();
}
