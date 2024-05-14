import { createSlice } from "@reduxjs/toolkit";
import el_2016_1 from "../pictures/gallery2016/20160605_124153.jpg";
import el_2016_2 from "../pictures/gallery2016/20160605_125808.jpg";
import el_2016_3 from "../pictures/gallery2016/20160605_125919.jpg";
import el_2016_4 from "../pictures/gallery2016/20160605_131041.jpg";
import el_2016_5 from "../pictures/gallery2016/20160605_131838.jpg";
import el_2016_6 from "../pictures/gallery2016/20160605_132738.jpg";
import el_2016_7 from "../pictures/gallery2016/20160605_133627.jpg";
import el_2016_8 from "../pictures/gallery2016/20160605_133820.jpg";
import el_2016_9 from "../pictures/gallery2016/20160605_134018.jpg";
import el_2016_10 from "../pictures/gallery2016/20160605_135520.jpg";
import el_2016_11 from "../pictures/gallery2016/20160605_144848.jpg";
import el_2016_12 from "../pictures/gallery2016/OLYMPUS DIGITAL CAMERA_101.jpg";
import el_2016_13 from "../pictures/gallery2016/OLYMPUS DIGITAL CAMERA_107.jpg";
import el_2016_14 from "../pictures/gallery2016/OLYMPUS DIGITAL CAMERA_108.jpg";
import el_2016_15 from "../pictures/gallery2016/OLYMPUS DIGITAL CAMERA_112.jpg";
import el_2016_16 from "../pictures/gallery2016/OLYMPUS DIGITAL CAMERA_83.jpg";
import el_2016_17 from "../pictures/gallery2016/OLYMPUS DIGITAL CAMERA_84.jpg";
import el_2016_18 from "../pictures/gallery2016/OLYMPUS DIGITAL CAMERA_92.jpg";
import el_2016_19 from "../pictures/gallery2016/OLYMPUS DIGITAL CAMERA_95.jpg";
import el_2016_20 from "../pictures/gallery2016/OLYMPUS DIGITAL CAMERA_97.jpg";

import el_2017_1 from "../pictures/gallery2017/CIMG0980.jpg";
import el_2017_2 from "../pictures/gallery2017/CIMG0984.jpg";
import el_2017_3 from "../pictures/gallery2017/CIMG0986.jpg";
import el_2017_4 from "../pictures/gallery2017/CIMG0992.jpg";
import el_2017_5 from "../pictures/gallery2017/CIMG0994.jpg";
import el_2017_6 from "../pictures/gallery2017/CIMG2481.jpg";
import el_2017_7 from "../pictures/gallery2017/CIMG2485.jpg";
import el_2017_8 from "../pictures/gallery2017/CIMG2487.jpg";
import el_2017_9 from "../pictures/gallery2017/CIMG2503.jpg";
import el_2017_10 from "../pictures/gallery2017/CIMG2521.jpg";
import el_2017_11 from "../pictures/gallery2017/CIMG2563.jpg";
import el_2017_12 from "../pictures/gallery2017/CIMG2565.jpg";
import el_2017_13 from "../pictures/gallery2017/CIMG2721.jpg";
import el_2017_14 from "../pictures/gallery2017/CIMG2726.jpg";
import el_2017_15 from "../pictures/gallery2017/CIMG2727.jpg";
import el_2017_16 from "../pictures/gallery2017/CIMG2742.jpg";
import el_2017_17 from "../pictures/gallery2017/CIMG2759.jpg";
import el_2017_18 from "../pictures/gallery2017/CIMG2780.jpg";
import el_2017_19 from "../pictures/gallery2017/CIMG2794.jpg";
import el_2017_20 from "../pictures/gallery2017/CIMG2801.jpg";
import el_2017_21 from "../pictures/gallery2017/CIMG2855.jpg";
import el_2017_22 from "../pictures/gallery2017/CIMG2856.jpg";
import el_2017_23 from "../pictures/gallery2017/CIMG2880.jpg";
import el_2017_24 from "../pictures/gallery2017/CIMG2893.jpg";
import el_2017_25 from "../pictures/gallery2017/CIMG2896.jpg";
import el_2017_26 from "../pictures/gallery2017/f0683712.jpg";
import el_2017_27 from "../pictures/gallery2017/f0704000.jpg";
import el_2017_28 from "../pictures/gallery2017/f0714048.jpg";
import el_2017_29 from "../pictures/gallery2017/f0880640.jpg";
import el_2017_30 from "../pictures/gallery2017/f0929664.jpg";

import el_2018_1 from "../pictures/gallery2018/[000815].jpg";
import el_2018_2 from "../pictures/gallery2018/[000825].jpg";
import el_2018_3 from "../pictures/gallery2018/[000830].jpg";
import el_2018_4 from "../pictures/gallery2018/[000831].jpg";
import el_2018_5 from "../pictures/gallery2018/[000834].jpg";
import el_2018_6 from "../pictures/gallery2018/[000847].jpg";
import el_2018_7 from "../pictures/gallery2018/[000881].jpg";
import el_2018_8 from "../pictures/gallery2018/[000907].jpg";
import el_2018_9 from "../pictures/gallery2018/[000959].jpg";
import el_2018_10 from "../pictures/gallery2018/[000963].jpg";
import el_2018_11 from "../pictures/gallery2018/[000964].jpg";
import el_2018_12 from "../pictures/gallery2018/[000969].jpg";
import el_2018_13 from "../pictures/gallery2018/[000975].jpg";
import el_2018_14 from "../pictures/gallery2018/[000979].jpg";
import el_2018_15 from "../pictures/gallery2018/[000982].jpg";
import el_2018_16 from "../pictures/gallery2018/[000984].jpg";
import el_2018_17 from "../pictures/gallery2018/[000985].jpg";
import el_2018_18 from "../pictures/gallery2018/[001004].jpg";
import el_2018_19 from "../pictures/gallery2018/[001012].jpg";
import el_2018_20 from "../pictures/gallery2018/[001017].jpg";
import el_2018_21 from "../pictures/gallery2018/[001018].jpg";
import el_2018_22 from "../pictures/gallery2018/[001162].jpg";
import el_2018_23 from "../pictures/gallery2018/[001167].jpg";
import el_2018_24 from "../pictures/gallery2018/[001185].jpg";
import el_2018_25 from "../pictures/gallery2018/[001199].jpg";
import el_2018_26 from "../pictures/gallery2018/[001215].jpg";
import el_2018_27 from "../pictures/gallery2018/[001219].jpg";
import el_2018_28 from "../pictures/gallery2018/[001230].jpg";
import el_2018_29 from "../pictures/gallery2018/[001233].jpg";
import el_2018_30 from "../pictures/gallery2018/[001235].jpg";
import el_2018_31 from "../pictures/gallery2018/[001245].jpg";
import el_2018_32 from "../pictures/gallery2018/[001250].jpg";
import el_2018_33 from "../pictures/gallery2018/[001254].jpg";

import el_2019_1 from "../pictures/gallery2019/20190810_130633.jpg";
import el_2019_2 from "../pictures/gallery2019/20190810_141508.jpg";
import el_2019_3 from "../pictures/gallery2019/20190810_141716.jpg";
import el_2019_4 from "../pictures/gallery2019/20190810_142016.jpg";
import el_2019_5 from "../pictures/gallery2019/20190810_142639.jpg";
import el_2019_6 from "../pictures/gallery2019/20190810_143737.jpg";
import el_2019_7 from "../pictures/gallery2019/20190810_144609.jpg";
import el_2019_8 from "../pictures/gallery2019/20190810_145420.jpg";
import el_2019_9 from "../pictures/gallery2019/20190810_145613.jpg";
import el_2019_10 from "../pictures/gallery2019/20190810_150404.jpg";
import el_2019_11 from "../pictures/gallery2019/20190810_150544.jpg";
import el_2019_12 from "../pictures/gallery2019/20190810_150631.jpg";
import el_2019_13 from "../pictures/gallery2019/20190810_151323.jpg";
import el_2019_14 from "../pictures/gallery2019/20190810_151823.jpg";
import el_2019_15 from "../pictures/gallery2019/20190810_152424.jpg";
import el_2019_16 from "../pictures/gallery2019/20190810_155257.jpg";
import el_2019_17 from "../pictures/gallery2019/20190810_155414.jpg";
import el_2019_18 from "../pictures/gallery2019/20190821_170336.jpg";
import el_2019_19 from "../pictures/gallery2019/20190906_114238.jpg";
import el_2019_20 from "../pictures/gallery2019/20190906_124718.jpg";
import el_2019_21 from "../pictures/gallery2019/20190907_184935.jpg";
import el_2019_22 from "../pictures/gallery2019/20190908_173704.jpg";
import el_2019_23 from "../pictures/gallery2019/20190909_102040.jpg";
import el_2019_24 from "../pictures/gallery2019/20191202_140935.jpg";
import el_2019_25 from "../pictures/gallery2019/20191202_141020.jpg";
import el_2019_26 from "../pictures/gallery2019/20191205_150326.jpg";
import el_2019_27 from "../pictures/gallery2019/20191205_152346.jpg";
import el_2019_28 from "../pictures/gallery2019/IMG-20190910-WA0016.jpg";
import el_2019_29 from "../pictures/gallery2019/IMG-20190910-WA0023.jpg";
import el_2019_30 from "../pictures/gallery2019/IMG-20190910-WA0046.jpg";
import el_2019_31 from "../pictures/gallery2019/IMG-20190910-WA0064.jpg";
import el_2019_32 from "../pictures/gallery2019/IMG-20240306-WA0004.jpg";
import el_2019_33 from "../pictures/gallery2019/IMG-20240306-WA0008.jpg";
import el_2019_34 from "../pictures/gallery2019/IMG-20240306-WA0009.jpg";
import el_2019_35 from "../pictures/gallery2019/IMG-20240306-WA0012.jpg";
import el_2019_36 from "../pictures/gallery2019/IMG-20240306-WA0014.jpg";
import el_2019_37 from "../pictures/gallery2019/IMG-20240306-WA0016.jpg";

import el_2020_1 from "../pictures/gallery2020/20200103_125718.jpg";
import el_2020_2 from "../pictures/gallery2020/20200103_130817.jpg";
import el_2020_3 from "../pictures/gallery2020/20200103_134148.jpg";
import el_2020_4 from "../pictures/gallery2020/20200103_144011.jpg";
import el_2020_5 from "../pictures/gallery2020/20200103_144919.jpg";
import el_2020_6 from "../pictures/gallery2020/20200105_143306.jpg";
import el_2020_7 from "../pictures/gallery2020/20200126_124306.jpg";
import el_2020_8 from "../pictures/gallery2020/20200126_124736.jpg";
import el_2020_9 from "../pictures/gallery2020/20200126_125056.jpg";
import el_2020_10 from "../pictures/gallery2020/20200126_125531.jpg";
import el_2020_11 from "../pictures/gallery2020/20200126_125629.jpg";
import el_2020_12 from "../pictures/gallery2020/20200126_135229.jpg";
import el_2020_13 from "../pictures/gallery2020/20200126_152734.jpg";
import el_2020_14 from "../pictures/gallery2020/20200126_154539.jpg";
import el_2020_15 from "../pictures/gallery2020/20200229_150710.jpg";
import el_2020_16 from "../pictures/gallery2020/20200229_150918.jpg";
import el_2020_17 from "../pictures/gallery2020/20200229_153226.jpg";
import el_2020_18 from "../pictures/gallery2020/20200712_105747.jpg";
import el_2020_19 from "../pictures/gallery2020/20200712_143934.jpg";
import el_2020_20 from "../pictures/gallery2020/20200712_145957.jpg";
import el_2020_21 from "../pictures/gallery2020/20200722_181822.jpg";
import el_2020_22 from "../pictures/gallery2020/20200722_181856.jpg";
import el_2020_23 from "../pictures/gallery2020/20200722_182729.jpg";
import el_2020_24 from "../pictures/gallery2020/20200722_183458.jpg";
import el_2020_25 from "../pictures/gallery2020/20200722_183656.jpg";
import el_2020_26 from "../pictures/gallery2020/20200722_184037.jpg";
import el_2020_27 from "../pictures/gallery2020/20200722_185305.jpg";
import el_2020_28 from "../pictures/gallery2020/20200722_190151.jpg";
import el_2020_29 from "../pictures/gallery2020/20200722_192501.jpg";
import el_2020_30 from "../pictures/gallery2020/20200722_192802.jpg";

import el_2021_1 from "../pictures/gallery2021/20210318_161455.jpg";
import el_2021_2 from "../pictures/gallery2021/20210318_161840.jpg";
import el_2021_3 from "../pictures/gallery2021/20210528_160431.jpg";
import el_2021_4 from "../pictures/gallery2021/20210702_144409.jpg";
import el_2021_5 from "../pictures/gallery2021/20210810_105228.jpg";
import el_2021_6 from "../pictures/gallery2021/20210810_105247.jpg";
import el_2021_7 from "../pictures/gallery2021/20210810_105429.jpg";
import el_2021_8 from "../pictures/gallery2021/20210810_114123.jpg";
import el_2021_9 from "../pictures/gallery2021/20211121_122400.jpg";
import el_2021_10 from "../pictures/gallery2021/20211121_125447.jpg";
import el_2021_11 from "../pictures/gallery2021/20211123_103927.jpg";
import el_2021_12 from "../pictures/gallery2021/20211219_135231.jpg";
import el_2021_13 from "../pictures/gallery2021/20211219_141352.jpg";
import el_2021_14 from "../pictures/gallery2021/20211219_141547.jpg";
import el_2021_15 from "../pictures/gallery2021/20211219_141842.jpg";
import el_2021_16 from "../pictures/gallery2021/20211219_142755.jpg";
import el_2021_17 from "../pictures/gallery2021/20211219_144209.jpg";
import el_2021_18 from "../pictures/gallery2021/20211219_144901.jpg";
import el_2021_19 from "../pictures/gallery2021/20211219_150419.jpg";
import el_2021_20 from "../pictures/gallery2021/20211219_150749.jpg";
import el_2021_21 from "../pictures/gallery2021/20211223_150242.jpg";
import el_2021_22 from "../pictures/gallery2021/20211223_150430.jpg";
import el_2021_23 from "../pictures/gallery2021/20211223_151922.jpg";
import el_2021_24 from "../pictures/gallery2021/20211223_155150.jpg";
import el_2021_25 from "../pictures/gallery2021/20211229_164233.jpg";
import el_2021_26 from "../pictures/gallery2021/20211229_165224.jpg";
import el_2021_27 from "../pictures/gallery2021/IMG-20210810-WA0008.jpg";
import el_2021_28 from "../pictures/gallery2021/IMG-20211121-WA0011.jpg";
import el_2021_29 from "../pictures/gallery2021/IMG-20211123-WA0001.jpg";
import el_2021_30 from "../pictures/gallery2021/IMG-20211123-WA0010.jpg";
import el_2021_31 from "../pictures/gallery2021/IMG-20211123-WA0011.jpg";
import el_2021_32 from "../pictures/gallery2021/IMG-20211123-WA0015.jpg";
import el_2021_33 from "../pictures/gallery2021/IMG-20211123-WA0016.jpg";

import el_2022_1 from "../pictures/gallery2022/20220226_120326.jpg";
import el_2022_2 from "../pictures/gallery2022/20220226_121420.jpg";
import el_2022_3 from "../pictures/gallery2022/20220226_124926.jpg";
import el_2022_4 from "../pictures/gallery2022/20220418_171023.jpg";
import el_2022_5 from "../pictures/gallery2022/20220516_150345.jpg";
import el_2022_6 from "../pictures/gallery2022/20220516_150654.jpg";
import el_2022_7 from "../pictures/gallery2022/20220516_152900.jpg";
import el_2022_8 from "../pictures/gallery2022/20220519_162711.jpg";
import el_2022_9 from "../pictures/gallery2022/20220519_170750.jpg";
import el_2022_10 from "../pictures/gallery2022/20220519_170858.jpg";
import el_2022_11 from "../pictures/gallery2022/20220519_171809.jpg";
import el_2022_12 from "../pictures/gallery2022/20220519_172457.jpg";
import el_2022_13 from "../pictures/gallery2022/20220526_160745.jpg";
import el_2022_14 from "../pictures/gallery2022/20220624_204753.jpg";
import el_2022_15 from "../pictures/gallery2022/20220624_205954.jpg";
import el_2022_16 from "../pictures/gallery2022/20220624_214035.jpg";
import el_2022_17 from "../pictures/gallery2022/20220625_104432.jpg";
import el_2022_18 from "../pictures/gallery2022/20220625_114724.jpg";
import el_2022_19 from "../pictures/gallery2022/20220625_114758.jpg";
import el_2022_20 from "../pictures/gallery2022/20220625_124511.jpg";
import el_2022_21 from "../pictures/gallery2022/20220625_152144.jpg";
import el_2022_22 from "../pictures/gallery2022/20220626_112339.jpg";
import el_2022_23 from "../pictures/gallery2022/20220626_121055.jpg";
import el_2022_24 from "../pictures/gallery2022/20220626_121143.jpg";
import el_2022_25 from "../pictures/gallery2022/20220708_111101.jpg";
import el_2022_26 from "../pictures/gallery2022/20220708_111709.jpg";
import el_2022_27 from "../pictures/gallery2022/20220708_112300.jpg";
import el_2022_28 from "../pictures/gallery2022/20220708_123128.jpg";
import el_2022_29 from "../pictures/gallery2022/20220710_115523.jpg";
import el_2022_30 from "../pictures/gallery2022/20220710_115756.jpg";
import el_2022_31 from "../pictures/gallery2022/20220710_115854.jpg";
import el_2022_32 from "../pictures/gallery2022/20220710_120939.jpg";
import el_2022_33 from "../pictures/gallery2022/20220710_133516.jpg";
import el_2022_34 from "../pictures/gallery2022/20220828_130128.jpg";
import el_2022_35 from "../pictures/gallery2022/20220828_130657.jpg";
import el_2022_36 from "../pictures/gallery2022/20220828_140911.jpg";
import el_2022_37 from "../pictures/gallery2022/20220828_141809.jpg";
import el_2022_38 from "../pictures/gallery2022/20220903_135448.jpg";
import el_2022_39 from "../pictures/gallery2022/20220903_152614.jpg";
import el_2022_40 from "../pictures/gallery2022/20220903_180800.jpg";
import el_2022_41 from "../pictures/gallery2022/20220916_125022.jpg";
import el_2022_42 from "../pictures/gallery2022/20220916_132525.jpg";
import el_2022_43 from "../pictures/gallery2022/20220916_133929.jpg";
import el_2022_44 from "../pictures/gallery2022/20220916_135149.jpg";
import el_2022_45 from "../pictures/gallery2022/20220916_141733.jpg";
import el_2022_46 from "../pictures/gallery2022/20220918_115044.jpg";
import el_2022_47 from "../pictures/gallery2022/20220918_143943.jpg";
import el_2022_48 from "../pictures/gallery2022/20220924_123804.jpg";
import el_2022_49 from "../pictures/gallery2022/20220924_131720.jpg";
import el_2022_50 from "../pictures/gallery2022/20220924_134055.jpg";
import el_2022_51 from "../pictures/gallery2022/20221001_110051.jpg";
import el_2022_52 from "../pictures/gallery2022/20221002_100550.jpg";
import el_2022_53 from "../pictures/gallery2022/20221002_103911.jpg";
import el_2022_54 from "../pictures/gallery2022/20221002_103950.jpg";
import el_2022_55 from "../pictures/gallery2022/20221002_104645.jpg";
import el_2022_56 from "../pictures/gallery2022/20221002_110412.jpg";
import el_2022_57 from "../pictures/gallery2022/20221002_110916.jpg";
import el_2022_58 from "../pictures/gallery2022/20221013_162536.jpg";
import el_2022_59 from "../pictures/gallery2022/20221013_164153.jpg";
import el_2022_60 from "../pictures/gallery2022/20221013_171954.jpg";
import el_2022_61 from "../pictures/gallery2022/20221014_133108.jpg";
import el_2022_62 from "../pictures/gallery2022/20221015_113905.jpg";
import el_2022_63 from "../pictures/gallery2022/20221015_125803.jpg";
import el_2022_64 from "../pictures/gallery2022/20221016_114745.jpg";
import el_2022_65 from "../pictures/gallery2022/20221016_125440.jpg";
import el_2022_66 from "../pictures/gallery2022/20221017_104158.jpg";
import el_2022_67 from "../pictures/gallery2022/IMG-20220226-WA0027.jpg";
import el_2022_68 from "../pictures/gallery2022/IMG-20220526-WA0051.jpg";
import el_2022_69 from "../pictures/gallery2022/IMG-20220626-WA0003.jpg";
import el_2022_70 from "../pictures/gallery2022/IMG-20220626-WA0016.jpg";
import el_2022_71 from "../pictures/gallery2022/IMG-20220712-WA0002 (1).jpg";
import el_2022_72 from "../pictures/gallery2022/IMG-20220805-WA0079.jpg";
import el_2022_73 from "../pictures/gallery2022/IMG-20220828-WA0095.jpg";
import el_2022_74 from "../pictures/gallery2022/IMG-20220828-WA0147.jpg";
import el_2022_75 from "../pictures/gallery2022/IMG-20220828-WA0168.jpg";
import el_2022_76 from "../pictures/gallery2022/IMG-20220828-WA0175.jpg";
import el_2022_77 from "../pictures/gallery2022/IMG-20220905-WA0035.jpg";
import el_2022_78 from "../pictures/gallery2022/IMG-20220905-WA0075.jpg";
import el_2022_79 from "../pictures/gallery2022/IMG-20220905-WA0097.jpg";
import el_2022_80 from "../pictures/gallery2022/IMG-20220905-WA0109.jpg";
import el_2022_81 from "../pictures/gallery2022/IMG-20220926-WA0029.jpg";
import el_2022_82 from "../pictures/gallery2022/IMG-20220926-WA0038.jpg";
import el_2022_83 from "../pictures/gallery2022/IMG-20221001-WA0026.jpg";
import el_2022_84 from "../pictures/gallery2022/IMG-20221002-WA0045.jpg";
import el_2022_85 from "../pictures/gallery2022/IMG-20221014-WA0064.jpg";
import el_2022_86 from "../pictures/gallery2022/IMG-20221014-WA0087.jpg";
import el_2022_87 from "../pictures/gallery2022/IMG-20221014-WA0094.jpg";
import el_2022_88 from "../pictures/gallery2022/IMG-20221014-WA0140.jpg";
import el_2022_89 from "../pictures/gallery2022/IMG-20221014-WA0173.jpg";
import el_2022_90 from "../pictures/gallery2022/IMG-20221015-WA0018.jpg";
import el_2022_91 from "../pictures/gallery2022/IMG-20221017-WA0008.jpg";
import el_2022_92 from "../pictures/gallery2022/IMG-20221017-WA0032.jpg";

import el_2023_1 from "../pictures/gallery2023/20230424_112259.jpg";
import el_2023_2 from "../pictures/gallery2023/20230424_112522.jpg";
import el_2023_3 from "../pictures/gallery2023/20230424_142317.jpg";
import el_2023_4 from "../pictures/gallery2023/20230424_153510.jpg";
import el_2023_5 from "../pictures/gallery2023/20230513_185236.jpg";
import el_2023_6 from "../pictures/gallery2023/20230513_190835.jpg";
import el_2023_7 from "../pictures/gallery2023/20230513_192318.jpg";
import el_2023_8 from "../pictures/gallery2023/20230514_111635.jpg";
import el_2023_9 from "../pictures/gallery2023/20230601_210546.jpg";
import el_2023_10 from "../pictures/gallery2023/20230713_165437.jpg";
import el_2023_11 from "../pictures/gallery2023/20230713_214434.jpg";
import el_2023_12 from "../pictures/gallery2023/20230714_111300.jpg";
import el_2023_13 from "../pictures/gallery2023/20230726_112300.jpg";
import el_2023_14 from "../pictures/gallery2023/20230726_112422.jpg";
import el_2023_15 from "../pictures/gallery2023/20230726_112957.jpg";
import el_2023_16 from "../pictures/gallery2023/20230726_113923.jpg";
import el_2023_17 from "../pictures/gallery2023/20230726_120128.jpg";
import el_2023_18 from "../pictures/gallery2023/20230726_124239.jpg";
import el_2023_19 from "../pictures/gallery2023/20230726_124525.jpg";
import el_2023_20 from "../pictures/gallery2023/20230726_124555.jpg";
import el_2023_21 from "../pictures/gallery2023/20230726_132619.jpg";
import el_2023_22 from "../pictures/gallery2023/20230726_133121.jpg";
import el_2023_23 from "../pictures/gallery2023/20230726_134404.jpg";
import el_2023_24 from "../pictures/gallery2023/20230726_142333.jpg";
import el_2023_25 from "../pictures/gallery2023/20230726_184009.jpg";
import el_2023_26 from "../pictures/gallery2023/20230726_185830.jpg";
import el_2023_27 from "../pictures/gallery2023/20230726_190311.jpg";
import el_2023_28 from "../pictures/gallery2023/20230726_230929.jpg";
import el_2023_29 from "../pictures/gallery2023/20230727_102004.jpg";
import el_2023_30 from "../pictures/gallery2023/20230803_120750.jpg";
import el_2023_31 from "../pictures/gallery2023/20230902_104138.jpg";
import el_2023_32 from "../pictures/gallery2023/20230902_113250.jpg";
import el_2023_33 from "../pictures/gallery2023/20230902_122330.jpg";
import el_2023_34 from "../pictures/gallery2023/20230902_163506.jpg";
import el_2023_35 from "../pictures/gallery2023/20230902_163540.jpg";
import el_2023_36 from "../pictures/gallery2023/20230902_170431.jpg";
import el_2023_37 from "../pictures/gallery2023/20230902_195651.jpg";
import el_2023_38 from "../pictures/gallery2023/20230903_131148 (1).jpg";
import el_2023_39 from "../pictures/gallery2023/20230904_094942.jpg";
import el_2023_40 from "../pictures/gallery2023/20230925_162407.jpg";
import el_2023_41 from "../pictures/gallery2023/20230926_144617.jpg";
import el_2023_42 from "../pictures/gallery2023/20230928_142000.jpg";
import el_2023_43 from "../pictures/gallery2023/20230928_142927.jpg";
import el_2023_44 from "../pictures/gallery2023/20230928_143311.jpg";
import el_2023_45 from "../pictures/gallery2023/20230930_140916.jpg";
import el_2023_46 from "../pictures/gallery2023/20231214_125707.jpg";
import el_2023_47 from "../pictures/gallery2023/20231215_124420.jpg";
import el_2023_48 from "../pictures/gallery2023/20231215_130405.jpg";
import el_2023_49 from "../pictures/gallery2023/20231215_130546.jpg";
import el_2023_50 from "../pictures/gallery2023/20231215_130818.jpg";
import el_2023_51 from "../pictures/gallery2023/20231215_132305.jpg";
import el_2023_52 from "../pictures/gallery2023/20231215_132343.jpg";
import el_2023_53 from "../pictures/gallery2023/20231215_133408.jpg";
import el_2023_54 from "../pictures/gallery2023/20231215_134116.jpg";
import el_2023_55 from "../pictures/gallery2023/20231215_134945.jpg";
import el_2023_56 from "../pictures/gallery2023/20231215_135925.jpg";
import el_2023_57 from "../pictures/gallery2023/20231215_140156.jpg";
import el_2023_58 from "../pictures/gallery2023/20231215_140626.jpg";
import el_2023_59 from "../pictures/gallery2023/20231215_140809.jpg";
import el_2023_60 from "../pictures/gallery2023/20231215_141312.jpg";
import el_2023_61 from "../pictures/gallery2023/20231215_151922.jpg";
import el_2023_62 from "../pictures/gallery2023/20231215_165119.jpg";
import el_2023_63 from "../pictures/gallery2023/20231215_171740.jpg";
import el_2023_64 from "../pictures/gallery2023/20231215_171916.jpg";
import el_2023_65 from "../pictures/gallery2023/20231216_120733.jpg";
import el_2023_66 from "../pictures/gallery2023/20231216_121235.jpg";
import el_2023_67 from "../pictures/gallery2023/20231216_123402.jpg";
import el_2023_68 from "../pictures/gallery2023/20231216_123419.jpg";
import el_2023_69 from "../pictures/gallery2023/20231216_125108.jpg";
import el_2023_70 from "../pictures/gallery2023/20231216_131145.jpg";
import el_2023_71 from "../pictures/gallery2023/20231216_133306.jpg";
import el_2023_72 from "../pictures/gallery2023/20231216_135355.jpg";
import el_2023_73 from "../pictures/gallery2023/20231216_171148.jpg";
import el_2023_74 from "../pictures/gallery2023/IMG-20230226-WA0034.jpg";
import el_2023_75 from "../pictures/gallery2023/IMG-20230226-WA0036.jpg";
import el_2023_76 from "../pictures/gallery2023/IMG-20230226-WA0037.jpg";
import el_2023_77 from "../pictures/gallery2023/IMG-20230226-WA0038.jpg";
import el_2023_78 from "../pictures/gallery2023/IMG-20230226-WA0039.jpg";
import el_2023_79 from "../pictures/gallery2023/IMG-20230226-WA0040.jpg";
import el_2023_80 from "../pictures/gallery2023/IMG-20230226-WA0042.jpg";
import el_2023_81 from "../pictures/gallery2023/IMG-20230226-WA0044.jpg";
import el_2023_82 from "../pictures/gallery2023/IMG-20230904-WA0090.jpg";
import el_2023_83 from "../pictures/gallery2023/IMG-20231214-WA0055.jpg";
import el_2023_84 from "../pictures/gallery2023/IMG-20231214-WA0056.jpg";
import el_2023_85 from "../pictures/gallery2023/IMG-20231214-WA0075.jpg";
import el_2023_86 from "../pictures/gallery2023/IMG-20231214-WA0084.jpg";
import el_2023_87 from "../pictures/gallery2023/IMG-20231214-WA0152.jpg";
import el_2023_88 from "../pictures/gallery2023/IMG-20231214-WA0163.jpg";
import el_2023_89 from "../pictures/gallery2023/IMG-20231215-WA0018.jpg";

import el_2024_1 from "../pictures/gallery2024/20240302_151713.jpg";
import el_2024_2 from "../pictures/gallery2024/20240302_154548.jpg";
import el_2024_3 from "../pictures/gallery2024/20240302_154625.jpg";
import el_2024_4 from "../pictures/gallery2024/20240302_154740.jpg";
import el_2024_5 from "../pictures/gallery2024/20240302_160158.jpg";
import el_2024_6 from "../pictures/gallery2024/20240302_161100.jpg";
import el_2024_7 from "../pictures/gallery2024/20240302_161637.jpg";
import el_2024_8 from "../pictures/gallery2024/20240302_162739.jpg";
import el_2024_9 from "../pictures/gallery2024/20240302_162816.jpg";
import el_2024_10 from "../pictures/gallery2024/20240302_163122.jpg";
import el_2024_11 from "../pictures/gallery2024/20240302_163605.jpg";
import el_2024_12 from "../pictures/gallery2024/20240302_163656.jpg";
import el_2024_13 from "../pictures/gallery2024/20240302_163901.jpg";
import el_2024_14 from "../pictures/gallery2024/20240302_164051.jpg";
import el_2024_15 from "../pictures/gallery2024/20240302_164556.jpg";
import el_2024_16 from "../pictures/gallery2024/20240302_164814.jpg";
import el_2024_17 from "../pictures/gallery2024/20240302_164934.jpg";
import el_2024_18 from "../pictures/gallery2024/20240302_165016.jpg";
import el_2024_19 from "../pictures/gallery2024/20240302_165120.jpg";
import el_2024_20 from "../pictures/gallery2024/20240302_165304.jpg";
import el_2024_21 from "../pictures/gallery2024/IMG-20240302-WA0058.jpg";
import el_2024_22 from "../pictures/gallery2024/IMG-20240302-WA0081.jpg";
import el_2024_23 from "../pictures/gallery2024/IMG-20240302-WA0084.jpg";

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    id: 0,
    img2016: [
      el_2016_1,
      el_2016_2,
      el_2016_3,
      el_2016_4,
      el_2016_5,
      el_2016_6,
      el_2016_7,
      el_2016_8,
      el_2016_9,
      el_2016_10,
      el_2016_11,
      el_2016_12,
      el_2016_13,
      el_2016_14,
      el_2016_15,
      el_2016_16,
      el_2016_17,
      el_2016_18,
      el_2016_19,
      el_2016_20,
    ],
    img2017: [
      el_2017_1,
      el_2017_2,
      el_2017_3,
      el_2017_4,
      el_2017_5,
      el_2017_6,
      el_2017_7,
      el_2017_8,
      el_2017_9,
      el_2017_10,
      el_2017_11,
      el_2017_12,
      el_2017_13,
      el_2017_14,
      el_2017_15,
      el_2017_16,
      el_2017_17,
      el_2017_18,
      el_2017_19,
      el_2017_20,
      el_2017_21,
      el_2017_22,
      el_2017_23,
      el_2017_24,
      el_2017_25,
      el_2017_26,
      el_2017_27,
      el_2017_28,
      el_2017_29,
      el_2017_30,
    ],
    img2018: [
      el_2018_1,
      el_2018_2,
      el_2018_3,
      el_2018_4,
      el_2018_5,
      el_2018_6,
      el_2018_7,
      el_2018_8,
      el_2018_9,
      el_2018_10,
      el_2018_11,
      el_2018_12,
      el_2018_13,
      el_2018_14,
      el_2018_15,
      el_2018_16,
      el_2018_17,
      el_2018_18,
      el_2018_19,
      el_2018_20,
      el_2018_21,
      el_2018_22,
      el_2018_23,
      el_2018_24,
      el_2018_25,
      el_2018_26,
      el_2018_27,
      el_2018_28,
      el_2018_29,
      el_2018_30,
      el_2018_31,
      el_2018_32,
      el_2018_33,
    ],
    img2019: [
      el_2019_1,
      el_2019_2,
      el_2019_3,
      el_2019_4,
      el_2019_5,
      el_2019_6,
      el_2019_7,
      el_2019_8,
      el_2019_9,
      el_2019_10,
      el_2019_11,
      el_2019_12,
      el_2019_13,
      el_2019_14,
      el_2019_15,
      el_2019_16,
      el_2019_17,
      el_2019_18,
      el_2019_19,
      el_2019_20,
      el_2019_21,
      el_2019_22,
      el_2019_23,
      el_2019_24,
      el_2019_25,
      el_2019_26,
      el_2019_27,
      el_2019_28,
      el_2019_29,
      el_2019_30,
      el_2019_31,
      el_2019_32,
      el_2019_33,
      el_2019_34,
      el_2019_35,
      el_2019_36,
      el_2019_37,
    ],
    img2020: [
      el_2020_1,
      el_2020_2,
      el_2020_3,
      el_2020_4,
      el_2020_5,
      el_2020_6,
      el_2020_7,
      el_2020_8,
      el_2020_9,
      el_2020_10,
      el_2020_11,
      el_2020_12,
      el_2020_13,
      el_2020_14,
      el_2020_15,
      el_2020_16,
      el_2020_17,
      el_2020_18,
      el_2020_19,
      el_2020_20,
      el_2020_21,
      el_2020_22,
      el_2020_23,
      el_2020_24,
      el_2020_25,
      el_2020_26,
      el_2020_27,
      el_2020_28,
      el_2020_29,
      el_2020_30,
    ],
    img2021: [
      el_2021_1,
      el_2021_2,
      el_2021_3,
      el_2021_4,
      el_2021_5,
      el_2021_6,
      el_2021_7,
      el_2021_8,
      el_2021_9,
      el_2021_10,
      el_2021_11,
      el_2021_12,
      el_2021_13,
      el_2021_14,
      el_2021_15,
      el_2021_16,
      el_2021_17,
      el_2021_18,
      el_2021_19,
      el_2021_20,
      el_2021_21,
      el_2021_22,
      el_2021_23,
      el_2021_24,
      el_2021_25,
      el_2021_26,
      el_2021_27,
      el_2021_28,
      el_2021_29,
      el_2021_30,
      el_2021_31,
      el_2021_32,
      el_2021_33,
    ],
    img2022: [
      el_2022_1,
      el_2022_2,
      el_2022_3,
      el_2022_4,
      el_2022_5,
      el_2022_6,
      el_2022_7,
      el_2022_8,
      el_2022_9,
      el_2022_10,
      el_2022_11,
      el_2022_12,
      el_2022_13,
      el_2022_14,
      el_2022_15,
      el_2022_16,
      el_2022_17,
      el_2022_18,
      el_2022_19,
      el_2022_20,
      el_2022_21,
      el_2022_22,
      el_2022_23,
      el_2022_24,
      el_2022_25,
      el_2022_26,
      el_2022_27,
      el_2022_28,
      el_2022_29,
      el_2022_30,
      el_2022_31,
      el_2022_32,
      el_2022_33,
      el_2022_34,
      el_2022_35,
      el_2022_36,
      el_2022_37,
      el_2022_38,
      el_2022_39,
      el_2022_40,
      el_2022_41,
      el_2022_42,
      el_2022_43,
      el_2022_44,
      el_2022_45,
      el_2022_46,
      el_2022_47,
      el_2022_48,
      el_2022_49,
      el_2022_50,
      el_2022_51,
      el_2022_52,
      el_2022_53,
      el_2022_54,
      el_2022_55,
      el_2022_56,
      el_2022_57,
      el_2022_58,
      el_2022_59,
      el_2022_60,
      el_2022_61,
      el_2022_62,
      el_2022_63,
      el_2022_64,
      el_2022_65,
      el_2022_66,
      el_2022_67,
      el_2022_68,
      el_2022_69,
      el_2022_70,
      el_2022_71,
      el_2022_72,
      el_2022_73,
      el_2022_74,
      el_2022_75,
      el_2022_76,
      el_2022_77,
      el_2022_78,
      el_2022_79,
      el_2022_80,
      el_2022_81,
      el_2022_82,
      el_2022_83,
      el_2022_84,
      el_2022_85,
      el_2022_86,
      el_2022_87,
      el_2022_88,
      el_2022_89,
      el_2022_90,
      el_2022_91,
      el_2022_92,
    ],
    img2023: [
      el_2023_1,
      el_2023_2,
      el_2023_3,
      el_2023_4,
      el_2023_5,
      el_2023_6,
      el_2023_7,
      el_2023_8,
      el_2023_9,
      el_2023_10,
      el_2023_11,
      el_2023_12,
      el_2023_13,
      el_2023_14,
      el_2023_15,
      el_2023_16,
      el_2023_17,
      el_2023_18,
      el_2023_19,
      el_2023_20,
      el_2023_21,
      el_2023_22,
      el_2023_23,
      el_2023_24,
      el_2023_25,
      el_2023_26,
      el_2023_27,
      el_2023_28,
      el_2023_29,
      el_2023_30,
      el_2023_31,
      el_2023_32,
      el_2023_33,
      el_2023_34,
      el_2023_35,
      el_2023_36,
      el_2023_37,
      el_2023_38,
      el_2023_39,
      el_2023_40,
      el_2023_41,
      el_2023_42,
      el_2023_43,
      el_2023_44,
      el_2023_45,
      el_2023_46,
      el_2023_47,
      el_2023_48,
      el_2023_49,
      el_2023_50,
      el_2023_51,
      el_2023_52,
      el_2023_53,
      el_2023_54,
      el_2023_55,
      el_2023_56,
      el_2023_57,
      el_2023_58,
      el_2023_59,
      el_2023_60,
      el_2023_61,
      el_2023_62,
      el_2023_63,
      el_2023_64,
      el_2023_65,
      el_2023_66,
      el_2023_67,
      el_2023_68,
      el_2023_69,
      el_2023_70,
      el_2023_71,
      el_2023_72,
      el_2023_73,
      el_2023_74,
      el_2023_75,
      el_2023_76,
      el_2023_77,
      el_2023_78,
      el_2023_79,
      el_2023_80,
      el_2023_81,
      el_2023_82,
      el_2023_83,
      el_2023_84,
      el_2023_85,
      el_2023_86,
      el_2023_87,
      el_2023_88,
      el_2023_89,
    ],
    img2024: [
      el_2024_1,
      el_2024_2,
      el_2024_3,
      el_2024_4,
      el_2024_5,
      el_2024_6,
      el_2024_7,
      el_2024_8,
      el_2024_9,
      el_2024_10,
      el_2024_11,
      el_2024_12,
      el_2024_13,
      el_2024_14,
      el_2024_15,
      el_2024_16,
      el_2024_17,
      el_2024_18,
      el_2024_19,
      el_2024_20,
      el_2024_21,
      el_2024_22,
      el_2024_23,
    ],
  },

  reducers: {
    reducer: (state) => state,
  },
});

export const { reducer } = gallerySlice.actions;

export default gallerySlice.reducer;
