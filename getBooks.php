<?php 
function get_all_books()
{
    $get_all_tasks_query = "SELECT id,title, date, author, reviews, rate, price, img, url FROM books;";
    $response = $GLOBALS['conn']->query($get_all_tasks_query);
    
    echo "<p id='numR'>".$response->num_rows."</p>";
    $x = 0;
    if ($response && $response->num_rows > 0) {
        while ($row = $response->fetch_array()) {
            echo "<li id='title".$x."'>".$row[1]."</li>";
            echo "<li id='date".$x."'>".$row[2]."</li>";
            echo "<li id='author".$x."'>".$row[3]."</li>";
            echo "<li id='reviews".$x."'>".$row[4]."</li>";
            echo "<li id='rate".$x."'>".$row[5]."</li>";
            echo "<li id='price".$x."'>".$row[6]."</li>";
            echo "<li id='img".$x."'>".$row[7]."</li>";
            echo "<li id='url".$x."'>".$row[8]."</li>";
            $x++;
        }
    } else {
        echo '<h2>Book list is empty!</h2>';
    }
}
?>