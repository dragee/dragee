MultiDrag
=========

multi drag library for webkit


how to add subtree to project
=============================

	$ git remote add -f multi_drag_src git@github.com:Vitaliy-Yarovuy/MultiDrag.git
	$ git merge -s ours --no-commit multi_drag_src/master
	$ git read-tree --prefix=modules/multidrag/ -u multi_drag_src/master
	$ git commit -m "Merge MultiDrag project as our subdirectory"


for update library

	$ git pull -s subtree multi_drag_src master
