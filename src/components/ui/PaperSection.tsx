import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PaperSectionProps {
  children: ReactNode;
  className?: string;
  hasTornTop?: boolean;
  hasTornBottom?: boolean;
  bgColor?: string;
  tearColor?: string;
}

const PaperSection = ({ 
  children, 
  className, 
  hasTornTop = false, 
  hasTornBottom = false,
  bgColor = '#F5EDE0',
}: PaperSectionProps) => {
  return (
    <section className={cn('relative', className)}>
      {hasTornTop && (
        <div className="absolute top-0 left-0 right-0 h-[60px] overflow-hidden pointer-events-none z-10" style={{ marginTop: '-1px' }}>
          <svg 
            className="absolute top-0 left-0 w-full h-full" 
            viewBox="0 0 1200 60" 
            preserveAspectRatio="none"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
          >
            <path 
              d="M0,20 C8,45 20,15 35,35 C50,55 65,10 82,30 C98,50 112,25 128,40 C142,55 158,20 172,45 C188,70 202,30 218,50 C232,70 248,35 262,55 C278,75 292,40 308,60 C322,80 338,45 352,65 C368,85 382,50 398,70 C412,90 428,55 442,75 C458,95 472,60 488,80 C502,100 518,65 532,85 C548,105 562,70 578,90 C592,110 608,75 622,95 C638,115 652,80 668,100 C682,120 698,85 712,105 C728,125 742,90 758,110 C772,130 788,95 802,115 C818,135 832,100 848,120 C862,140 878,105 892,125 C908,145 922,110 938,130 C952,150 968,115 982,135 C998,155 1012,120 1028,140 C1042,160 1058,125 1072,145 C1088,165 1102,130 1118,150 C1132,170 1148,135 1162,155 C1178,175 1200,140 1200,160 L1200,60 L0,60 Z" 
              fill={bgColor}
            />
          </svg>
        </div>
      )}

      <div className="relative z-[1]">
        {children}
      </div>

      {hasTornBottom && (
        <div className="absolute bottom-0 left-0 right-0 h-[60px] overflow-hidden pointer-events-none z-10" style={{ marginBottom: '-1px' }}>
          <svg 
            className="absolute bottom-0 left-0 w-full h-full" 
            viewBox="0 0 1200 60" 
            preserveAspectRatio="none"
            style={{ filter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.1))' }}
          >
            <path 
              d="M0,40 C15,15 28,45 42,25 C58,5 72,40 88,20 C102,0 118,35 132,15 C148,-5 162,30 178,10 C192,-10 208,25 222,5 C238,-15 252,20 268,0 C282,-20 298,15 312,-5 C328,-25 342,10 358,-10 C372,-30 388,5 402,-15 C418,-35 432,0 448,-20 C462,-40 478,-5 492,-25 C508,-45 522,-10 538,-30 C552,-50 568,-15 582,-35 C598,-55 612,-20 628,-40 C642,-60 658,-25 672,-45 C688,-65 702,-30 718,-50 C732,-70 748,-35 762,-55 C778,-75 792,-40 808,-60 C822,-80 838,-45 852,-65 C868,-85 882,-50 898,-70 C912,-90 928,-55 942,-75 C958,-95 972,-60 988,-80 C1002,-100 1018,-65 1032,-85 C1048,-105 1062,-70 1078,-90 C1092,-110 1108,-75 1122,-95 C1138,-115 1152,-80 1168,-100 C1182,-120 1200,-85 1200,-105 L1200,0 L0,0 Z" 
              fill={bgColor}
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default PaperSection;