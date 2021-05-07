export class Actor{
    constructor(
    public hash_id: string,
    public user_id:number,
    public user_login: string,
    public role: string,
    public status: string,
    public created_at: Date,
    public allocation_percentage: number,
    public price: number,
    public name?: string,
    public image?: string,
    ){}
    }