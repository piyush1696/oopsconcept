class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
      this.id = id;
       this.name = name;
    }
  
    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
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
    addEmployee(employee: string) {
        this.employees.push(employee);
      }
    printadmins(){
        console.log(this.admin);
    }
  }
  class Finance extends Department{
      
      constructor(id:string, private report:string[]){
          super(id,'Finance');
        }
        getreport(text:string){
            this.report.push(text);
        }
        addEmployee(employee: string) {
            this.employees.push(employee);
          }

      printreport(){
          console.log(this.report);
          console.log(this.employees);
      }
  }
  const accounting = new Department('d1', 'Accounting');
  const itdept = new ItDept('d2',['A','B','C']);
  const finan=new Finance('d3',[]);
  finan.addEmployee('Saurabh');
  finan.getreport('This is Secret shh');
  finan.printreport();

  /* console.log(finan.printreport());
  console.log(itdept.printadmins());
  console.log(itdept.name);
   */