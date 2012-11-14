MultiDrag
=========

multi drag library for webkit


how to add subtree to project
=============================

	git remote add -f multi_drag_src git@git.qapint.com:multidrag.git
	git merge -s ours --no-commit multi_drag_src/master
	git read-tree --prefix=modules/multidrag/ -u multi_drag_src/master
	git commit -m "Merge MultiDrag project as our subdirectory"


for update library

	git pull -s subtree multi_drag_src master

include library in index.html
-----------------------------
	<!-- multidrug including -->
	<script src="modules/multidrag/point.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/util.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/bound.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/positioning.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/obj.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/target.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/targetManager.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/list.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/listswitcher.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/arcslider.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/spider.js" type="text/javascript" charset="utf-8"></script>
	<script src="modules/multidrag/chart.js" type="text/javascript" charset="utf-8"></script>
