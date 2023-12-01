/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import "./TasbiApp.css";

const TasbiApp = () => {
  const [tasbi1, setTasbi1] = useState(0);
  const [tasbi2, setTasbi2] = useState(0);
  const [tasbi3, setTasbi3] = useState(0);

  // Increment
  const SubhanAllah = () => {
    setTasbi1(tasbi1 < 33 ? tasbi1 + 1 : 33);
  };

  const Alhandulilah = () => {
    setTasbi2(tasbi2 < 33 ? tasbi2 + 1 : 33);
  };

  const allahhuakbar = () => {
    setTasbi3(tasbi3 < 34 ? tasbi3 + 1 : 34);
  };

  // Decrement
  const SubhanAllahDecrement = () => {
    setTasbi1(tasbi1 <= 0 ? (tasbi1 = 0) : tasbi1 - 1);
  };

  const AlhandulilahDecrement = () => {
    setTasbi2(tasbi2 <= 0 ? (tasbi1 = 0) : tasbi2 - 1);
  };

  const AllahhuakbarDecrement = () => {
    setTasbi3(tasbi3 <= 0 ? (tasbi3 = 0) : tasbi3 - 1);
  };

  // Reset all
  const resetall = () => {
    setTasbi1(0);
    setTasbi2(0);
    setTasbi3(0);
  };

  return (
    <>
      <div className="tasbi-counter-parent">
        <div className="titel-text">
          <h3 className="Bisbillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h3>
          <p>
            আবূ হুরায়রাহ্ (রাঃ) থেকে বর্ণিতঃ তিনি বলেন, রসূলুল্লাহ (সাল্লাল্লাহু
            ‘আলাইহি ওয়া সাল্লাম) বলেছেনঃ যে ব্যক্তি প্রত্যেক ওয়াক্ত সলাতের শেষে-
            <b>
              সুবহানাল্লাহ ৩৩ বার, আলহামদুলিল্লাহ ৩৩ বার, আল্লাহু আকবার ৩৩ বার।
              এর পর ১ বার--
            </b>
            <span>
              لَا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ لَهُ
              الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيْرٌ
            </span>
            (অর্থাৎ- আল্লাহ ছাড়া প্রকৃত কোন ইলাহ নেই। তিনি একক ও তাঁর কোন
            অংশীদার নেই। সার্বভৌম ক্ষমতার অধিকারী একমাত্র তিনিই। সম প্রশংসা
            তাঁরই প্রাপ্য। তিনি সবকিছু করতে সক্ষম-তার গুনাহসমূহ সমুদ্রের
            ফেনারাশির মতো অসংখ্য হলেও ক্ষমা করে দেওয়া হয়।) <br/> <b> (ই.ফা.১২২৮,
            ই.সে.১২৪০) সহিহ মুসলিম, হাদিস নং ১২৩৯) <br/> হাদিসের মান: সহিহ হাদিস</b>
          </p>
        </div>
        <div dir="rtl" className="flex main-div">
          <div className="subhanallah content-div flex">
            <h1 className="content">{tasbi1}</h1>
            <h1 className="arbi-text">سُـبْحانَ الله</h1>
            <p className="meaning-text">
              আল্লাহ মহিমান্বিত, প্রকৃত মালিক, তিনি ছাড়া কোন ইলাহ নেই; তিনি
              সম্মানিত আরশের রব।{" "}
            </p>
            <div className="btn flex">
              <button onClick={SubhanAllah}> সুবহানাল্লাহ + </button>
              <button onClick={SubhanAllahDecrement}> সুবহানাল্লাহ - </button>
            </div>
          </div>

          <div className="Alhandulilah content-div flex">
            <h1 className="content">{tasbi2}</h1>
            <h1 className="arbi-text">ٱلْحَمْدُ لِلَّٰهِ</h1>
            <p className="meaning-text">
              সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সমগ্র জগতের প্রতিপালক
            </p>
            <div className="btn flex">
              <button onClick={Alhandulilah}>আলহামদুলিল্লাহ +</button>
              <button onClick={AlhandulilahDecrement}>আলহামদুলিল্লাহ -</button>
            </div>
          </div>

          <div className="allahhuakbar content-div flex">
            <h1 className="content">{tasbi3}</h1>
            <h1 className="arbi-text">الله أكبر</h1>
            <p className="meaning-text">
              আল্লাহ তাআলা সব কিছুর চেয়ে বড় এবং মহান।
            </p>
            <div className="btn flex">
              <button onClick={allahhuakbar}>আল্লাহু আকবার +</button>
              <button onClick={AllahhuakbarDecrement}>আল্লাহু আকবার -</button>
            </div>
          </div>
        </div>

        <div className="resetall flex">
          <button onClick={resetall}>Reset All</button>
        </div>
      </div>
    </>
  );
};

export default TasbiApp;
