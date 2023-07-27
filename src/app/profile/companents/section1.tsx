import React, { useEffect, useState } from 'react';
import {
  DivBoxAvatarAndInputSC, DivTempBoxSC,
  DivWrapperInputsSC,
  DivWrapperProfileAvatarSC,
  InputSC,
  SpanSC,
  IconImgSC,
  DivBackgroundSC
} from "@/app/profile/styles.profile";
import Image from "@/app/images/vedmak.webp";
import ButtonWrapper from "@/app/components/custom_button";

const Section1 = () => {
  const [
    dataLayout,
    setData
  ] = useState({
    w: 0,
    h: 0
  })

  useEffect(() => {
    setData({
      w: window.outerWidth,
      h: window.outerHeight
    })
    window.addEventListener('resize', resize)
  }, [])

  const resize = (e: any) => {
    console.log('>>>>>>>>>>>>>>>>>>>>', e)
    setData({
      w: e.target.outerWidth,
      h: e.target.outerHeight
    })
  }


  return (
    <DivBoxAvatarAndInputSC>
      <DivWrapperProfileAvatarSC
        $img={Image.src}
      >
        <DivBackgroundSC/>
        <IconImgSC size={'80px'} color='#fff'/>

      </DivWrapperProfileAvatarSC>
      <DivWrapperInputsSC>
        <SpanSC>Nickname</SpanSC>
        <InputSC
          type={'text'}
          placeholder={'Nickname'}
        />
      </DivWrapperInputsSC>
      <DivTempBoxSC>
        <ButtonWrapper
          directionRadius="center"
          // styles={styles}
          primary={true}
          height={64}
          width={dataLayout.w >= 768 ? 107 : 250}
        // onClick={() => router.push('/')}
        >
          <span> Save </span>
        </ButtonWrapper>
      </DivTempBoxSC>

    </DivBoxAvatarAndInputSC>
  );
};

export default Section1;