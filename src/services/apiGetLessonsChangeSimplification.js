export async function apiGetLessonsChangeSimplification() {
    try {
      const response = await fetch("");
      const data = await response.json();
  
      return data;
    } catch (error) {
      throw new Error("Unable to fetch lessons for change simplification");
    }
  }