import DesignUI from "./components/DesignUI"

export default function Page(){
  const props = {
    name : "Super",
    count : 30,
    images : [
      {
        url : "https://images.unsplash.com/photo-1764081992251-401d16ffcdc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
        ready : true,
        error : false
      },
      {
        url : "https://plus.unsplash.com/premium_photo-1764187003089-972f9e69bee6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        ready : false,
        error : true
      },
      {
        url : "https://images.unsplash.com/photo-1764232390300-b1d3fdce2824?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
        ready : true,
        error : false
      }
    ]
  }
  return(
    <div className="h-screen w-screen flex items-center justify-center">
      <DesignUI {...props}/>
    </div>
  )
}