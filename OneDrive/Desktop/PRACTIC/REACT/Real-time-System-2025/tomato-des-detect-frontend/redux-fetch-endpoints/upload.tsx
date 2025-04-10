import axios from "axios";
const upload_Url = "http://localhost:8000/api/upload/";

export const uploadImage = async (formData) => {
    try {
        
        const response = await axios.post(upload_Url, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        });
    
        console.log("Image uploaded successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
}