import Link from 'next/link';
import React from 'react';

// TO DO : style footer

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '2rem 0',
  // position: 'absolute',
  bottom: 0,
  width: '100%',
};

const columnStyle = {
  margin: '0 auto',
};


const pageStyle = {
  minHeight: 'auto',  // Ensure the page height covers the viewport.
  display: 'flex',
  flexDirection: 'column',
};

const Footer = () => {
  return (
    <div style={pageStyle}>
      <footer style={footerStyle}>
      <div className="container" style={columnStyle}>
        <div flex items-center justify-between>
          <div className="col-md-4">
            {/* <h3>Contact Us</h3>
            <p>If you have any questions or need assistance, please don't hesitate to reach out.</p> */}
            <div className="flex items-center justify-between">
              <a href='https://m.facebook.com/priyankaraghuramandance'>
              <svg xmlns="http://www.w3.org/2000/svg" width='30px' height='30px' viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
              </a>
            </div>
            
            <div className="flex items-center justify-between">
              <a href='https://www.youtube.com/@PriyankaRaghuraman'>
              <svg xmlns="http://www.w3.org/2000/svg"  width='30px' height='30px'  viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              </a>
            </div>

            <div className="flex items-center justify-between">
              <a href='https://www.instagram.com/priyankaraghuramandance/'>
              <svg xmlns="http://www.w3.org/2000/svg" width='30px' height='30px' viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
              </a>
            </div>

   
            <div className="flex items-center justify-between">
               <a href="mailto:priyankaraghuramandance@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width='30px' height='30px' viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            </a>
            </div>
           
            <div>Address: Priyada Arts Studio, Newark </div>

            <div>Phone: (123) 456-7890</div>
          </div>
        </div>

        <hr />
      </div>
      </footer>
    </div>
  );
};

export default Footer;
