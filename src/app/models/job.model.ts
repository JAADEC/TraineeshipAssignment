
// Model for the job objects
export interface IJob {
    id: Number,
    company: String,
    logo: String,
    new: Boolean,
    featured: Boolean,
    position: String,
    role: String,
    level: String,
    postedAt: String,
    contract: String,
    location: String,
    languages: [String],
    tools: [String]
}