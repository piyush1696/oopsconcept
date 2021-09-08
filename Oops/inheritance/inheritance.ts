class Department {
    // private readonly id: string;
    // private name: string;
    private employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
      this.id = id;
       this.name = name;
    }
  
     public describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
   public  addEmployee(employee: string) {
      this.employees.push(employee);
    }
  
    public printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  class ItDept extends Department{
    admin:string[];
    constructor(id:string,admins:string[]){
     super(id,'IT');
     this.admin=admins;
    }
   public  printadmins(){
        console.log(this.admin);
    }
  }
  class Finance extends Department{
      
      constructor(id:string, private report:string[]){
          super(id,'Finance');
        }
       public  getreport(text:string){
            this.report.push(text);
        }

     public  printreport(){
          console.log(this.report);
      }
  }
  const accounting = new Department('d1', 'Accounting');
  const itdept = new ItDept('d2',['A','B','C']);
  const finan=new Finance('d3',[]);
  finan.getreport('This is Secret shh');
  finan.printreport();

  console.log(finan.printreport());
  console.log(itdept.printadmins());
  console.log(itdept.name);
  /* itdept.printEmployeeInformation();
  accounting.addEmployee('Saurabh');
  accounting.addEmployee('Deepak');
   accounting.describe();
  accounting.name = 'newname';
  accounting.printEmployeeInformation();
   */
  