


function dijkstra(graph,source,destination){

	this.previousNode=[];
	this.distance=new Array();				
	this.distance[source.name]=0;
	this.pq=new MinPQ();
	var nodes=graph.getAllNodes();
	length=nodes.length;
	for(var i=0;i<length;i++){
		if(nodes[i]!=source){
			this.distance[nodes[i].name]=Number.POSITIVE_INFINITY;
		}
		pq.push(nodes[i],this.distance[nodes[i].name]);
	}
	
	while(pq.size()!=0){
		u=pq.pop();
		adjList=u.adjList;
		for (var i = 0; i < adjList.length; i++) {
			v=adjList[i];
			if(this.distance[u.name]!=Number.POSITIVE_INFINITY){
				alt=this.distance[u.name]+u.weight[i];
				if(typeof v != "undefined") {
					if(alt<this.distance[v.name]){
						this.distance[v.name]=alt;
						this.previousNode[v.name]=u.name;
						pq.remove(v);
						pq.push(v,this.distance[v.name]);
					}
				}
			}
		}
	}
	if(typeof destination==='undefined'){

	}else 
	return this.distance[destination.name];
}

function bellman_ford(graph,source,destination){
	this.previousNode=[];
	this.distance=new Array();				
	this.distance[source.name]=0;
	var nodes=graph.getAllNodes();
	length=nodes.length;
	for(var i=0;i<length;i++){
		if(nodes[i]!=source){
			this.distance[nodes[i].name]=Number.POSITIVE_INFINITY;
		}
	}
	
	for(var k=0;k<length;k++){
		for(var j=0;j<length;j++){
			u=nodes[j];
			adjList=u.adjList;
			for (var i = 0; i < adjList.length; i++) {
				v=adjList[i];
				if(this.distance[u.name]!=Number.POSITIVE_INFINITY){	
					alt=this.distance[u.name]+u.weight[i];
					if(alt<this.distance[v.name]){

						this.previousNode[v.name]=u.name;
						this.distance[v.name]=alt;
					}
				}
			}
		}
	}

	for(var j=0;j<length;j++){
		u=nodes[j];
		adjList=u.adjList;
		for (var i = 0; i < adjList.length; i++) {
			v=adjList[i];
			if(this.distance[u.name]!=Number.POSITIVE_INFINITY){	
				alt=this.distance[u.name]+u.weight[i];
				if(alt<this.distance[v.name]){
					return null;
				}
			}
		}
	}
	
	return this.distance[destination.name];	

}

function johnson(graph){
	try
	{
		// http://en.wikipedia.org/wiki/Johnson%27s_algorithm
		temp=new Node('temp');
		graph.addNode(temp);
		nodes=graph.getAllNodes();
		length=nodes.length;
		for(var j=0;j<length-1;j++){
			u=nodes[j];
			temp.addEdge(u,0);
		}
		vari=bellman_ford(graph,temp,temp);
		if(vari==null) {
			return null;
		}
		bell=new bellman_ford(graph,temp,temp);
		length=nodes.length;
		h=bell.distance;
		graph.removeNode(temp);		
		length=nodes.length;
		for(var j=0;j<length;j++){
			u=nodes[j];
			adjList=u.adjList;
			for (var i = 0; i < adjList.length; i++) {
				v=adjList[i];
				u.weight[i]=u.weight[i]+h[u.name]-h[v.name];
			}
		}	
		distanceMatrix=new Array()
		length=nodes.length;
		for(var j=0;j<length;j++){
			u=nodes[j];
			list=u.weight;
			len=list.length;
			dij=new dijkstra(graph,nodes[j]);
			distanceMatrix[nodes[j].name]=dij.previousNode;
			
		}
		for(var j=0;j<length;j++){
			u=nodes[j];
			adjList=u.adjList;
			for (var i = 0; i < adjList.length; i++) {
				v=adjList[i];
				u.weight[i]=u.weight[i]-h[u.name]+h[v.name];
			}
		}
	}
	catch(e)
	{
		console.log(e);
	}
	return distanceMatrix;	
}	

function shortest_path(_origin){
		graph = new Graph();


		//create nodes
		nodes = {}
		for (var i in c_data) {
				nodes["node"+i] = graph.addNode(i);
		}
		console.log("created nodes");

		// add edges
		for (var i in c_data) {
			my_dist = Math.sqrt(parseFloat(c_data[i]["area"]))/2;
			for (var nb in c_data[i]["nb"]) {
				if (c_data[i]["nb"] != i){
					origin_node = nodes["node"+i];
					nb_node = nodes["node"+nb];
					if (typeof c_data[nb] == "undefined") {
						origin_node.addEdge(nb_node, (my_dist *2)*1.3);
						console.log("edge error");
						console.log(nb);
					} 
					else {
						their_dist = Math.sqrt(parseFloat(c_data[nb]["area"]))/2;
						origin_node.addEdge(nb_node, (my_dist + their_dist)*1.3);
					}
					
				}
			}
		}
		console.log("added edges");
		console.log("starting to calculate");
		// calculate distances
		origin_nodee = nodes["node"+_origin];
		distances = {}
		for (var i in c_data) {
			if (c_data[_origin] != i){
				to_nodee = nodes["node"+i];
				if (((typeof origin_nodee )!= "undefined") && ((typeof to_nodee )!= "undefined")) {
					distance = dijkstra(graph, origin_nodee, to_nodee);
					distances[i] = distance;
				}
			}
		}
		// death = "deathlk"
		 $('.lol').html(JSON.stringify(distances));
		 // console.log(distances);

		 console.log("finished calculating");


		// console.log(distances);
	}

		// graph =new Graph();
		// node1=graph.addNode("1");
		// node2=graph.addNode("2");
		// node3=graph.addNode("3");
		// node4=graph.addNode("4");
		// node5=graph.addNode("5");
		// node6=graph.addNode("6");
		// node7=graph.addNode("7");
		// node8=graph.addNode("8");
		// node9=graph.addNode("9");
		// node10=graph.addNode("10");
		
		// node1.addEdge(node2,1);
		// node1.addEdge(node4,2);
		// node2.addEdge(node3,5);
		// node4.addEdge(node3,14);
		// node3.addEdge(node5,17);
		// node2.addEdge(node6,4);
		// node6.addEdge(node7,5);
		// node5.addEdge(node8,6);
		// node5.addEdge(node9,12);
		// node8.addEdge(node10,4);
		// node9.addEdge(node10,3);
		
		// var test='';

		// test+='Shortest Path Test:<br>';
		// error=false;
		// yo = dijkstra(graph,node1,node5);
		// yo2 = dijkstra(graph,node1,node9);
		// console.log(yo);
		// console.log(yo2);

