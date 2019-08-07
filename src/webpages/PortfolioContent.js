import React, { Component} from 'react';
import './styles/parallax.css';
import Resume from './resources/Resume.pdf';
import pic from './resources/NikoSendek.jpg'

import pic1 from './resources/wallpapers/pic1.png';
import pic2 from './resources/wallpapers/pic2.png';
import pic3 from './resources/wallpapers/pic3.png';
import pic4 from './resources/wallpapers/pic4.png';
import pic5 from './resources/wallpapers/pic5.png';

class Porfolio extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
     <div>


      <div class="MainContainer">

      <div class="ParallaxContainer2">
        <img src={pic} alt="pic of me"  height="60%"/>
        <h1>
          About Me
        </h1>
      </div>

      <div class="background-parallax pic1">
        <img src={pic1} alt="pic of me"  height="100%"/>
      </div>
      <div class="background-parallax pic4">
        <img src={pic2} alt="pic of me"  height="100%"/>
      </div>
      <div class="background-parallax pic3">
        <img src={pic3} alt="pic of me"  height="100%"/>
      </div>

        <div class="ContentContainer">
          <div class="Content">
          <embed src={Resume} width="100%" height="1000px"/>
            <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
            </p>
            <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
            </p>
            <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.
            </p>
           </div>
        </div>

        </div>
      </div>
    );
  }
}


export default Porfolio;
