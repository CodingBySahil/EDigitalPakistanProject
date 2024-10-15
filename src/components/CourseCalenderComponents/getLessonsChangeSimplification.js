export function apiGetLessonsChangeSimplification() {
    const {
      data: dataLessonsChangeSimplification,
      status: statusLessonsChangeSimplification,
    } = useQuery({
      queryFn: apiGetLessonsChangeSimplification,
      queryKey: ["lessonsChangeSimplification"],
    });
  
    return { dataLessonsChangeSimplification, statusLessonsChangeSimplification };
  }