const mongoose=require('mongoose');
//to feed .env into process but first install .env
const dbConnect=()=>{
    mongoose.connect("mongodb+srv://todo:todo1@merncluster.gssgs.mongodb.net/merndb?retryWrites=true&w=majority&appName=mernCluster",{
       
    })
    .then(()=>console.log("db connection is successful")
)
.catch((error)=>{
    console.log("issue in db connection");
    console.error(error.message);

    process.exit(1);
})

}
module.exports=dbConnect;