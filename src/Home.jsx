function Home(){
    var name = "Mukesh Kumar";
    var officialName = () =>"Rishikesh Kumar"
    return <h3>
        {/* Welcome to the Home Page! This is a simple React application of {name} */}
         Welcome to the Home Page! This is a simple React application of {officialName()}
    </h3>
} 

export default Home; 