export class Login {
  constructor(
    public email: string,
    public password: string
  ) {}
}

export class JobAlert {
  constructor(
    public job_id:number,
    public phone:number
    ) {}
}
  
export class Job {
  constructor(
    public title:string,
    public vacancies: number
  ) {}
}

export class Education {
  constructor(
    public job_id: number,
    public title: string,
    public vacancies: number
  ) {}
}

export class Post {
  constructor(
    public edu_id: number,
    public title: string,
    public organisation: string,
    public date: Date
  ) {}
}

export class Description {
  constructor(
    public job_id: number,
    public edu_id: number,
    public post_id: number,
    public title: string,
    public name: string,
    public vacancies: number,
    public area_wise: string,
    public age_limit: string,
    public pay_scale: string,
    public fee: string,
    public fileName: string,
    public url: any
  ) {}
}