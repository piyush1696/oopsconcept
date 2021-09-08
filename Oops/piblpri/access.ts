class Department1{
    name:string;
    private studname:string[]=[];
    
    constructor(n:string,private readonly id:number){
        this.name=n;
        this.id=id;
    }
    describe(){
        
        console.log('Department: '+this.name);
    }
    studentname(name:string){
        this.studname.push(name);

    }
    printname(){
        //this.id=3; this give err bcz id has readonly property
        //this.name="hh"; this will not give error
        console.log('Department: '+this.name);
        console.log(this.studname);
        console.log(this.id);
    }
}
const obj3=new Department1("Electrical",1);

obj3.studentname('Abhishek');
obj3.studentname('Saurabh');
obj3.studentname('Rohit');
//obj3.studname[3]="deepak"; can't be accessed because member is private
console.log(obj3.printname());
