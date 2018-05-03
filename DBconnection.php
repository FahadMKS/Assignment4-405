<?php

// WARNING: NEVER DO THIS IN PRODUCTION
$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);

$conn = new mysqli($server, $username, $password, $db);

// check the connection
if ($conn->connect_error) {
    // exit and kill this process
    echo "Failed to connect to database!";
    die("Connection failed: ");
}

?>
