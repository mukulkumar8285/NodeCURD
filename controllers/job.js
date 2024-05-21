const JobModel = require("../modules/job")

const createJob = async (req , res) =>{
const JobObj = req.body;
const newJob = new JobModel(JobObj);
const newJobPosting = await newJob.save()
// await newJob.save();
    console.log(req.body);
    res.json({
        success: true,
        massage:"Job Created Successfully",
        Job_Id : newJobPosting._id,
    });
}

const listJob =  async(req , res)=>{
const minSalary = req.query.minSalary;
const JobList  = await JobModel.find({
    salary:{
        $gt:minSalary,
    },
});
// console.log(JobList);

    res.json({
        success:true ,
        massage : "list Job Api",
        JobList : JobList,
    });
}
const editJob =  async(req , res)=>{
    // const minSalary = req.query.minSalary;
const JobId = req.params.id;
console.log(JobId);

await JobModel.findByIdAndUpdate(JobId , req.body);
// console.log(req.body);

    res.json({
        success:true ,
        massage : "Job Edit Successfully Edit Api",
    });
}
const DeleteJob =  async(req , res)=>{
   const JobId_Detete = req.params.id;
   console.log(JobId_Detete);
   
  await JobModel.findByIdAndDelete(JobId_Detete , req.body);

    res.json({
        success:true ,
        massage : "Job Delete SuccessFully Api",
    });
}


const JobControllers={
    createJob,
    listJob,
    editJob,
    DeleteJob,
}

module.exports = JobControllers;