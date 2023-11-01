<h1>jQuery TreeView Documentation</h1>

<h2>TreeView</h2>
<pre>
	TreeView( DataStructure Object datas, OptionsStructure Object options )
</pre>

<h2> Options Structure</h2>
<pre>
	{
		className : String Default ""
		showAlwaysCheckBox : Boolean Default False
		fold : Boolean Default false
		openAllFold : Boolean Default false
	}
</pre>

<h2> TreeView Structure </h2>
<pre>
	e˙· load ( DataStructure Object data )
	e · save ( String type, Optional HTMLElement node) DataStrucute
		type -> [Default "tree", "list"]
		node -> Want To tree save from node

	e · update

	v · HTMLElement root 
</pre>

<h2> Node Structure </h2>
<pre>.treeview
    p.group
         i.fa[fold-button]
         span.item
              i.fa[check-icon=1]
         p.group
             span.item [check-value=0,1,2]
                  i.fa[check-icon=1]
    p.group ...</pre>

<h2> Data Structure </h2>
<pre>treeObject = [
	{
		text:"Parent 1", // Required
		checked:true, // Optional
		id:15,otherDatas:"Other Datas", // Other Datas Optional
		children:[ // Required
			{ text:"Child 1" /* Required */	},
			{ text:"Child 2" /* Required */	}
		]
	}</pre>

<h2>HTML Node Structure</h2>
<pre>
<b>.item</b>
	e · changeCheckState ( Integer value  )
	e · setCheckState ( Integer value )

	v · Integer checked
	v · Object data
<b>.group</b>
	// e · open
	// e · close
	e · toggle

	// v · isOpened
</pre>



<h2> Data Structure Example</h2>
<pre>treeObject = [
	{
		text:"Parent 1", // Required
		checked:true, // Optional
		id:15,otherDatas:"Other Datas", // Other Datas Optional
		children:[ // Required
			{ text:"Child 1" /* Required */	},
			{ text:"Child 2" /* Required */	}
		]
	},
	{
		text:"Parent 2", // Required
		children:[
			{
				text:"Parent 3",
				children:[
					{text:"Child 3",checked:true},
					{text:"Child 4"}
				]
			}
		]
	}
]</pre>
