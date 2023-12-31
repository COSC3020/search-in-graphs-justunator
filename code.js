function depthFirstSearch(graph, startNode, targetNode) {
    if (startNode == targetNode){
        return [startNode]
    }
    else if(graph.length < 1){
        return []
    }
    var visited =  Array.from({length: graph.length}, (e, i)=> false)
    var path = []
    var stack = [startNode]
    while(stack.length > 0 && startNode != targetNode){
        startNode = stack[stack.length-1]
        stack.pop()
        //console.log(stack)

        if(!visited[startNode]){
            path.push(startNode)
            visited[startNode] = true

            for(var i in graph[startNode]){
                //console.log(graph[startNode][i])
                //console.log("stack check",!visited[graph[startNode][i]])

                if(!visited[graph[startNode][i]]){
                    stack.push(graph[startNode][i])
                }
            }
            //console.log(stack)
        }
        
    }
    if(visited[targetNode]){
        return path;
    }
    else{
        return []
    } 
}

//console.log(depthFirstSearch([[ 1 ], [ 0, 2, 3 ], [ 1, 3 ], [ 1, 2 ], [ 0, 1, 3 ]], 0, 4)) // debug