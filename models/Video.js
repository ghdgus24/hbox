import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
	fileURL: {
		type: String,
		required: "File URL is required", // required 가 충족되지 못하면 나오는 에러메세지
	},
	title: {
		type: String,
		required: "Title is required",
	},
	description: String,
	views: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

const model = mongoose.model("Video", VideoSchema);
export default model;
