// import React, { Suspense, lazy, useState, useEffect } from 'react';
//
// const importDemo = (file) => lazy(() => import(`~/img/${file}`).catch(() => console.log('Error in importing')));
//
// const DynamicIcon = (iconCode) => {
//   const [selectedDemo, setSelectedDemo] = useState([]);
//
//   async function loadDemo(code) {
//     return new Promise((resolve) => {
//       const promise = async () => {
//         const Demo = await importDemo(code);
//         return <Demo />;
//       };
//     });
//
//     // const promise = filtered.map(async (demo) => {
//     //   const Demo = await importDemo(demo.file);
//     //   return <Demo key={demo.id} />;
//     // });
//
//     Promise(promise).then(setSelectedDemo);
//   }
//
//   useEffect(() => {
//     loadDemo(iconCode);
//   }, [iconCode]);
//
//   return (
//     <>
//       <div className="demo-ground">
//         <Suspense fallback="Loading demo, hang on...">{selectedDemo}</Suspense>
//       </div>
//     </>
//   );
// };
//
// export default DynamicIcon;
