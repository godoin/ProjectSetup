<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title><?php echo $title; ?></title>
  <meta name="#" content="#">

  <link rel="stylesheet" href="assets/css/global.css" type="text/css">
  <link rel="stylesheet" href="assets/css/common.css" type="text/css">
  <link rel="stylesheet" href="assets/css/layout.css" type="text/css">
  <link rel="stylesheet" href="assets/css/index.css" type="text/css">
  <link rel="stylesheet" href="assets/fontawesome-web/css/all.css">
</head>

<body>
  <div class="loader-container" id="loader">
    <div id="spinner"></div>
  </div>
  <div class="container" id="content">
    <?php include('views/inc/LoggedInNavbar.php') ?>
    
    <?php include($contentView) ?>
    
    <?php include('views/inc/Footer.php') ?>

    <?php include('views/inc/Modals.php') ?>
  </div>


  <!-- JS Link -->
  <script src="js/index.js" type="module"></script>
  <script src="js/eventHandler.js" type="module"></script>
  <script src="js/loading.js" type="module"></script>
  <script src="js/menuToggle.js" type="module"></script>
</body>
</body>

</html>