export class Experience {
  constructor(
    public company: string,
    public position: string,
    public startDate: Date,
    public endDate?: Date,
    public description?: string
  ) {}
}