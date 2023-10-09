import Image from 'next/image';

import svgPolarBearHead from '../../assets/svg/polar-bear-head.svg'; // @/assets/svg/polar-bear-head.svg does not work in storybook

export interface BearSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const imageSizes = {
  sm: 60,
  md: 80,
  lg: 100,
} as const;

const BearSpinner = ({ size = 'md' }: BearSpinnerProps) => {
  const imageSize = imageSizes[size];

  return (
    <div className="inline-block ">
      <Image
        src={svgPolarBearHead}
        width={imageSize}
        height={imageSize}
        alt="polar bear head"
        className="animate-spin"
      />
    </div>
  );
};

export default BearSpinner;
