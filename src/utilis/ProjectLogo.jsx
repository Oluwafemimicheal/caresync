
const ProjectLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-700 text-white flex justify-center items-center rounded-md relative">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-700 border-2 border-white absolute -right-0.5 -top-0.5"></div>
        <h1 className="font-bold text-md">C</h1>
      </div>
      <h1 className="font-bold text-lg text-gray-900">CareSync</h1>
    </div>
  )
}

export default ProjectLogo
