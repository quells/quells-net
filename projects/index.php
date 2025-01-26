<?php
	require_once($_SERVER['DOCUMENT_ROOT'] . '/global/Markdown.php');
	use \Michelf\Markdown;
?>
<!DOCTYPE html>
<head>
	<meta charset="UTF-8" />
	<link href='http://fonts.googleapis.com/css?family=Lato:300, 400' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Vollkorn:400italic,400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="styles.css" />
	<title>Projects</title>
</head>
<body>
<section>
<h1>Projects</h1>
<?php
$year = 9999;
$year_match = array();
$files = array();
foreach (glob("*.md") as $file) { $files[] = $file; }
$files = array_reverse($files);
foreach ($files as $filename) {
preg_match("/[0-9]{4}/", $filename, $year_match);
if ($year_match[0] < $year) { $year = $year_match[0]; echo '<h2>', $year, '</h2>'; }
$md = file_get_contents($filename);
$html = Markdown::defaultTransform($md);
echo '<article>', $html, '</article>';
}
?>
</section>
</body>