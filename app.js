
// import React from "react";
// import ReactDOM  from "react-dom/client";


//react.cretaeelement=object=>htmlelement(render)
// const heading=React.createElement(
//     "h1",
// {id:"heading"},
// "namaste reactcourse"
// );


//jsx= is not html in jsx orhtml like or xml like syntac
//react element
//console.log(heading)
//********************************
// const Title = ()=>(
// <h1  className="head" tabIndex='5'> 
 
//     namaste react using jsx
//    </h1>
     
// )
// const HeadingComponent=()=>(
//     <div id="container">
//    <Title></Title>
//     <h1 className="heading">namaste react functonal </h1>
//     </div>
// )
// const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadingComponent/>);
 
import React from "react";
import ReactDOM  from "react-dom/client";

// const header=React.createElement("div",
// {
// className:"Title",
// key:"title",
// },
// [
//     React.createElement(
//    "h1",
//    {
//     key:"h1",
//    },
//    "this is h1 tag"     

//     ),

// React.createElement(
//    "h2",
//    {
//     key:"h2",
//    },
//    "this is h2 tag"     
// ),
    
// React.createElement(
//    "h3",
//    {
//     key:"h3",
//    },
//    "this is h3 tag"     

//     ),
//     ]
// )
//create a same element using jsx
// const header=(
//     <div>
//     <h1 className="title">this is h1 tag</h1>
//     <h2 className="title">this is h1 tag</h2> 
//     <h3 className="title">this is h1 tag</h3>
//     </div>
// )

//  const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
 
//create a functional component of the samewth jsx

// const HeaderComponenet=()=>(
//     <div id="container">
//     <h1 className="title">this is h1 tag</h1>
//     <h2 className="title">this is h1 tag</h2> 
//     <h3 className="title">this is h1 tag</h3>
//     </div>
// )

//  const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponenet/>);

//pass attribute into the jsx


// const HeaderComponenet=()=>(
//         <div id="container">
//         <h1 className="title" style={{color:"blue"}}>this is h1 tag</h1>
//         <h2 className="title" style={{color:"green"}}>this is h2 tag</h2> 
//         <h3 className="title" style={{color:"red"}}>this is h3 tag</h3>
//         </div>
//     )
    
//      const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<HeaderComponenet/>);
    
//compostioon of a component

// import React from "react";
// import ReactDOM  from "react-dom/client";

// const Header=()=>(
//     <h1 className="head">
//         namaste react series
//         </h1>
// );



// const HeaderComponenet=()=>(
//         <div id="container">
            
//         <h1 className="title">this is h1 tag</h1>
//         <h2 className="title">this is h1 tag</h2> 
//         <h3 className="title">this is h1 tag</h3>
//          </div>
//     )
    
//      const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<HeaderComponenet/>);


//{TitleComponent}
// import React from "react";
//  import ReactDOM  from "react-dom/client";

// const TitleComponent = () => {
//     return <h1>Hello,World!</h1>;
//   };
  
//   const App = () => {
//     return (
//       <div>
//         <h2>
//         {TitleComponent}
//             hello sangeetha
//         </h2>
//         </div>
//     );
//   };
  
//   const root=ReactDOM.createRoot(document.getElementById("root"));
//        root.render(<App/>);

  //{<TitleComponent/>}
  
//   import React from "react";
//   import ReactDOM  from "react-dom/client";
//   const TitleComponent = () => {
//     return <h2>Hello, World!</h2>; {/* Changed h1 to h2 for nesting */}
//   };
  
//   const App = () => {
//     return (
//       <div>
//         <h1>hello sangeetha {/* Main h1 */}
//           <TitleComponent /> {/* Now properly nested inside a different level heading */}
//         </h1>
//       </div>
//     );
//   };
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<App />);
  
  //{<TitleComponent>}{<TitleComponent/>}


//   import React from "react";
//     import ReactDOM  from "react-dom/client";
//     const TitleComponent = () => {
//       return <h2>Hello, World!</h2>; {/* Changed h1 to h2 for nesting */}
//     };
    
//     const App = () => {
//       return (
//         <div>
//           <h1>hello sangeetha {/* Main h1 */}
//             <TitleComponent/><TitleComponent/> {/* Now properly nested inside a different level heading */}
//           </h1>
//         </div>
//       );
//     };
    
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<App />);
    

    import React from "react";
     import ReactDOM  from "react-dom/client";

     const HeaderComponenet=()=>{
      return(
<header className="header">
      <div className="left"> 
        <img src="https://e7.pngegg.com/pngimages/670/1021/png-clipart-local-search-engine-optimisation-search-engine-optimization-web-search-engine-geotargeting-service-navbar-logo-agriculture-thumbnail.png" alt="Logo" />
      </div>
      <div className="center">
        <input type="text" placeholder="Search..." />
        <button type="submit">Submit</button>
      </div>
      <div className="right">
        <img src="data:image/png;base64,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" alt="User Icon" />
      </div>
    </header>
      )
     }
const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(<HeaderComponenet />);


























