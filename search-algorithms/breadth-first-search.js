calculateShortestPath(node1:Models.SwitchObject,node2:Models.SwitchObject,previousNode){

            node1.explored = true;
            node1.cost = 0;
            this.spNodeArray.push(node1);            

            //breadth first search
            while(this.spNodeArray.length != 0){
                var workingNode = this.spNodeArray.shift();
                
                var currentLinks = this.linkFinder(workingNode);

                $.each(currentLinks,(i,v:Models.Links)=>{
                    //my links have source-target parameters but source node and target node varies randomly so
                    //I have to check both
                        if (v.source.hwAddress != workingNode.hwAddress && v.source.explored != true) {
                            this.switchFinder(v.source.hwAddress).cost = v.target.cost + 1;
                            this.switchFinder(v.source.hwAddress).explored = true;
                            this.spNodeArray.push(this.switchFinder(v.source.hwAddress));
                            this.cost[v.source.hwAddress] = {
                                "parent": workingNode.hwAddress,
                                "cost": v.target.cost + 1
                            };
                        } else if (v.target.hwAddress != workingNode.hwAddress && v.target.explored != true) {
                            this.switchFinder(v.target.hwAddress).cost = v.source.cost + 1;
                            this.switchFinder(v.target.hwAddress).explored = true;
                            this.spNodeArray.push(this.switchFinder(v.target.hwAddress));
                            this.cost[v.target.hwAddress] = {
                                "parent": workingNode.hwAddress,
                                "cost": v.source.cost + 1
                            };
                        }
                });
            }        

        var costTable = this.cost;
        var pathArray = this.thePathArray(node1,node2,costTable);

        return pathArray;
    }


    thePathArray(begNode,endNode,costTable){
        var pathArray=[];
        var pointer = endNode.hwAddress;
        while(pointer != begNode.hwAddress){
            for(var key in costTable){
                if(key == pointer ){
                    pathArray.push(key);
                    pointer = costTable[key].parent;
                }
            }
        };

        return pathArray;
    }