import { RouterProvider } from "react-router-dom";
import { router } from "./routing/allRoutes";

function App() {
  // const {
  //   data: bloggerData,
  //   error,
  //   isLoading,
  // } = useQuery<AxiosResponse<StrapiWrapper<Blogger>, any>, StrapiError>({
  //   queryKey: ["home"],
  //   queryFn: () =>
  //     request.get<StrapiWrapper<Blogger>>("bloggers/1?populate=image"),
  // })

  // if (isLoading) {
  //   return <h1>loading...</h1>
  // }
  // if (error) {
  //   return <h1>{error.message || error.response.data.error.message}</h1>
  // }

  // return <>{bloggerData && bloggerData.data.data.attributes.name}</>

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
