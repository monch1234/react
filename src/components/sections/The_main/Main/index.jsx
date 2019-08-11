import React from 'react';
import Emilia from '../../../../assets/images/a38016_26f20c8c994c42be844b164e04070605.webp'
import './style/style.css';

 function Main (){
    return(
      <main>
        <div className = ' emilia '>
            <h1><a href='#' className = ' emilia_coul '>Эмилия <br/>Коул //</a></h1>
            <div className = ' text_by_emilia '>
              <div className = ' text   text_1'>
                <h2 className='text_h2'>TWIST</h2>
              </div>
              <div className = ' text   text_2'>
                <h2 className='text_h2'>IN MY</h2>
              </div>
              <div className = ' text '>
                <h2 className='text_h2'>REALITY</h2>
              </div>
            </div>
        </div>
        <div className = ' emilia_img '>
          <img src = { Emilia }  />
        </div>
      </main>
    )
}

export default Main
