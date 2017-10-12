

// songs by artist
// all artists more than once
// between Range
// specific song

function runApp (){
    inquirer.prompt([ name of q ==todo; ask 1 q with 4 options])
    .then (function(e,ans){
        switch (ans.todo) {
            case 1:
                inquirer.prompt([which artist name==artist]).then(function(e,ans){
                    connection.query("select * from top5000 where ?", [artist:ans.artist], function(e,res){
                        console.log(res);
                        runApp();
                    })
                });
            case 2: 
                // no inquirer needed
                myquery = "select *, count(*) as row_count from top5000 group by artist having count(*)>2";
                connection.query(myquery, function(e, res){
                    console.log(res);
                    runApp();
                }
            case 3:
                inquierer.prompt([2 qs, names==beg & end]).then(function(e,ans){
                    connection.query("select * from top5000 where id between ? and ?",[ans.beg,ans.end], function (e,res){
                        console.log(res);
                        runApp();
                    })
                });
            case 4:
                inquirer.prompt([1 qes, name==song]).then(function(e,ans){
                    connection.query("select * from top5000 where ?", [song:ans.song], function(e,data){
                        console.log(data);
                        runApp();
                    })
                })
            CASE 5 :
            same album same year
            default: runApp();
        }
    })
}