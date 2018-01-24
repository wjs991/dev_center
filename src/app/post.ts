export class Post{
  public createdAt: Date;
  public updatedAt: Date;
  public id;
  constructor(


    public title?: String,
    public body?: String,
    public categoryId?: String,
    public comments?: Comment[],


  ){


  }

}
