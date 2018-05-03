<!DOCTYPE HTML>
<html>

  <head>
    <title>Fahad Majed Al-Sayyali - 1536156 </title>
    <link rel="stylesheet" href="Style.css">
  </head>

  <body>
<?php 
    // enable mysql error reporting for debugging only
    // $driver = new mysqli_driver();
    // $driver->report_mode = MYSQLI_REPORT_ALL;
    require_once('./DBconnection.php');
    require('./getBooks.php');
 ?>
    
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#contact">Categories</a>
      <a href="#about">About Us</a>
    </div>
    <hr>
    <br>
    
    <div id="sort-wrap">
      <h5>Sort By:
        <select id="sort-books">
          <option value="Default">Reviews (Default)</option>
          <option value="PriceHigh">Price high to low</option>
          <option value="PriceLow">Price low to high</option>
          <option value="Rating">Rating</option>
          <option value="New">Newest</option>
          <option value="Old">Oldest</option>

          <!-- add a few more sort criteria -->
        </select>
      </h5>
    </div>
    <ul id="books-list">
            <?php get_all_books();?>
      </ul>
      

    <script src="Script.js"></script>
    <hr>
    <p>&copy2018 Fahad Majed AlSayyali - 1536156 ALL RIGHTS RESERVED</p>
  </body>