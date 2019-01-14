

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <title>Pancakes - Tasty Recipes</title>
    <link rel="stylesheet" href="../../resources/css/reset.css">
    <link rel="stylesheet" href="../../resources/css/styleGeneral.css">
    <link rel="stylesheet" href="../../resources/css/styleRecipe.css">
</head>

<body>
        <div id="banner">
            <?php include 'resources/fragments/header.php' ?>
        </div>   

        <nav id="navbar">
            <?php include 'resources/fragments/nav.php' ?>
        </nav>

    <div class="header">
    <h1>Pancakes</h1>
    </div>

    <div class="picturePancakes"></div>

    <section class="block"> 
        <h3>INGREDIENTS</h3>
        <ul>
            <li>2 eggs</li>
            <li>3 dl milk</li>
            <li>2 dl flour</li>
            <li>2 tsp vanilla sugar</li>
            <li>1 sprinkle of salt</li>
            <li>3 tbs melted butter</li>
            <li>50 g butter</li>
            <li>2 blueberries</li>
        </ul>
    </section>

    <section class="block">
        <h3>INSTRUCTIONS</h3>
        <ol>
            <li>Mix flour, salt and vanilla sugar.</li>
            <li>Pour in milk and mix. Add egg and mix. Wait 10 min.</li>
            <li>Melt butter in pan.</li>
            <li>Insert 1 dl of the mix at a time into the pan. Turn it over when brown.</li>
            <li>Repeat step four until the mix is finished.</li>
            <li>Enjoy.</li>
        </ol>
    </section>

    <div class="comments">
        <h3>COMMENTS</h3>
        <div id="cmnts"></div>
        <div id="comments"></div>
        <ul>
        </ul>

    </div>
    <script src="../../resources/jquery/jquery.min.js"></script>
    <script src="../../resources/js/recipeCom.js"></script>
    <script src="../../resources/js/user.js"></script>
</body>
</html>