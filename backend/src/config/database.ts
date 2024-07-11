
const connectDB = async () => {
    try {
        console.log('DB Connected');
    } catch (error: any) {
        console.error('DB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
