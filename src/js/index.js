const abc = () => {
    console.log("hello world called withput babel")
    let data = {
        "data1":"dataval1",
        "data2":"dataval2",
        "data3":"dataval3",
    }
    const {data1,data2,data3} = data;
    console.log("data1",data1)
    console.log("data2",data2)
    console.log("data3",data3)
}
abc();