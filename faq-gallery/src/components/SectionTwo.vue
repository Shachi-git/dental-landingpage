// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import { ref, computed, watch } from 'vue';
import SectionSubTitle from './SectionSubTitle.vue';
import SubParagraphText from './SubParagraphText.vue';

import allonfourOne from '../assets/images/allonfour1.webp';
import allonfourTwo from '../assets/images/allonfour2.webp';
import allonfourThree from '../assets/images/allonfour3.webp';
import allonfourFour from '../assets/images/allonfour4.webp';
import allonfourFive from '../assets/images/allonfour5.webp';
import allonfourSix from '../assets/images/allonfour6.webp';
import allonfourSeven from '../assets/images/allonfour7.webp';
import allonfourEight from '../assets/images/allonfour8.webp';
import allonfourNine from '../assets/images/allonfour9.webp';
import allonfourTen from '../assets/images/allonfour10.webp';
import allonfourEleven from '../assets/images/allonfour11.webp';
import allonfourTwelve from '../assets/images/allonfour12.webp';
import allonfourThirteen from '../assets/images/allonfour13.webp';
import gingivectomyOne from '../assets/images/gingivectomy1.webp';
import lanapOne from '../assets/images/lanap1.webp';
import lanapTwo from '../assets/images/lanap2.webp';
import pinholeOne from '../assets/images/pinhole1.webp';
import pinholeTwo from '../assets/images/pinhole2.webp';
import pinholeThree from '../assets/images/pinhole3.webp';
import connectiveTissue from '../assets/images/cnt1.webp';
import depigmentationOne from '../assets/images/dep1.webp';
import depigmentationTwo from '../assets/images/dep2.webp';
import multipleOne from '../assets/images/multiple1.webp';
import singleOne from '../assets/images/onetooth1.webp';
import smileInADayOne from '../assets/images/sn1.webp';
import smileInADayTwo from '../assets/images/sn2.webp';
import smileInADayThree from '../assets/images/sn3.webp';
import smileInADayFour from '../assets/images/sn4.webp';
import smileInADayFive from '../assets/images/sn5.webp';
import smileInADaySix from '../assets/images/sn6.webp';
import teethInAnHour from '../assets/images/tnh1.webp';
import zirconiaOne from '../assets/images/zirconia1.webp';



const cards = [
  {
    id: 1,
    title: 'All On 4 for Broken Teeth',
    category: 'All-on-Four',
    image: allonfourOne,
    description: `A patient presented to the office with broken and mobile teeth and wanted to fix them and get a new smile. She brought in pictures of inspiration photos and old photos of herself so that we can create the perfect smile for her. Her main concern along with the ones listed above was that she wanted a 25% deduction in her smile and that is exactly what she got and could not be more pleased with the results.`
  },
  {
    id: 2,
    title: 'Replaced Partial Dentures for All on 4',
    category: 'All-on-Four',
    image: allonfourTwo,
    description: `Patient was referred from her allergy doctor, which happens to be Dr. Nejat's brother. Patient never thought that the treatment she needed would be affordable. She saved up for the treatment of an upper All On Four as getting her smile back and feeling confident was very important to her. After the treatment, she was able to get rid of her partial dentures and get her beautiful smile back.`
  },
  {
    id: 3,
    title: 'Upper Denture and Lower Partial to All on 4',
    category: 'All-on-Four',
    image: allonfourThree,
    description: `Manhattan patient presents to the office with an upper denture and a lower partial along with periodontal disease. He hated wearing his dentures and felt like he could not enjoy his favorites foods because of the lack of function in his dentition. He also rarely smiled so he wanted a new smile to correct those issues. He went along with upper and lower All On Four done on the same day and was very satisfied with the results.`
  },
  {
    id: 4,
    title: 'All On 4 Used to Treat Severe Gum Disease',
    category: 'All-on-Four',
    image: allonfourFour,
    description: `Smoker patient presented with severe gum disease. He hated his smile and wanted a new smile that was natural and as quickly as possible. Smile In A day was done where we cleaned up the bottom teeth and took out the top teeth, inserted 6 tilted implants with an All On Four Concept. He was very satisfied with the results and was shocked that it could all happen within a day.`
  },
  {
    id: 5,
    title: 'Replaced Upper and Lower Dentures with All On 4',
    category: 'All-on-Four',
    image: allonfourFive,
    description: `Patient presented with gum disease on the upper and lower with partial dentures on both arches. Upper and lower All On Four was done and his smile was changed drastically. Patient was very content with the results as he said he looked younger and his smile was more natural and comfortable after the procedure.`
  },
  {
    id: 6,
    title: 'All On 4 to Treat Bone Loss',
    category: 'All-on-Four',
    image: allonfourSix,
    description: `Patient came all the way from Pittsburg, Pennsylvania to get a consult due to very thin bone left due to severe bone loss. He suffered from dental fear which resulted in decayed teeth and severe periodontal disease. He wanted his old smile back and hated wearing his dentures. The All On 4 was the best option for him and he immediately was satisfied and regained his confidence.`
  },
  {
    id: 7,
    title: 'Replaced Lower Denture with All On 4',
    category: 'All-on-Four',
    image: allonfourSeven,
    description: `Manhattan patient and former NYU professor was very knowledgeable and interested about the newest technologies available to promote and treat various health issues. Although handicapped and after numerous health treatments he decided to stay on top of his health and get rid of his lower denture as it constantly “popped out” form his mouth and he couldn’t talk or eat. Lower Smile In A Day was performed and  extremely changed his profile and he can finally taste his food as there  is no plastic covering his palate. Very happy and impressed with the technology.`
  },
  {
    id: 8,
    title: 'All On 4 Treatment for Amelogenesis Imperfecta',
    category: 'All-on-Four',
    image: allonfourEight,
    description: `Manhattan patient presented with amelogenesis imperfecta which is a tooth development disorder where the teeth are covered with thin, abnormally formed enamel and are damaged easily and deteriorate quickly if left untreated. Her son wanted his mom to have a normal life back as she locked herself at home, and struggled to find a decent job due to her appearance. We were able to give her back her old smile with upper and lower All On Four which gave her the world's confidence boost to go out and live a normal life.`
  },
  {
    id: 9,
    title: 'Young Patient’s Smile Restored With All on 4',
    category: 'All-on-Four',
    image: allonfourNine,
    description: `Young, 27 year old, thyroid cancer patient who went through chemotherapy resulted in her dentition to look like she was a drug abuser. Worked with her parents to get her old smile back. First she had her cavities taken care of in the lower jaw, following a lower partial denture which was inserted the same day as her upper All On Four surgery. She had restored her smile within a month which in turn also gave her back the confidence and health she had lost.`
  },
  {
    id: 10,
    title: 'From No Function to a Natural Smile',
    category: 'All-on-Four',
    image: allonfourTen,
    description: `Patients desire overall was to be able to socialize again as her friends were ashamed to take her anywhere due to her existing teeth. Patient presented with no function left in her dentition, the teeth were mobile and flared out with heavy wear on them. She also had an existing implant on tooth #7. Her wish was to get a new natural smile that fit her face. We were able to use her preexisting implant in the All On Four and added three more on the top and four more on the bottom to create the natural smile that she desired. She was very happy with the results.`
  },
  {
    id: 11,
    title: 'Patient Got Rid of Annoying Dentures for All On 4',
    category: 'All-on-Four',
    image: allonfourEleven,
    description: `Part time Floridian and part time New Yorker presented with upper denture and partial lower denture. She despised both dentures due to her bite not coming together from dentures which caused her to not be able to chew. We reprogrammed her muscles first with several tensing sessions and then proceeded with the All on Four procedure on the top and bottom so that she would be able to chew normally and we got her bite to be more balanced. The patient could not be more happier with the results.`
  },
  {
    id: 12,
    title: 'PhD with Periodontitis and Fear of Dentistry',
    category: 'All-on-Four',
    image: allonfourTwelve,
    description: `Highly educated individual who had obtained a PhD, works for a pharmaceutical company and her father was a dentist presented with severe periodontal disease due to neglect and fear of dentists. She presented with a retainer that was holding her teeth together so that they would not fall out. She had all on four on the top and bottom done and could not be happier with the results.`
  },
  {
    id: 13,
    title: 'Smile-In-A-Day Patient with Severe Periodontal Disease',
    category: 'All-on-Four',
    image: allonfourThirteen,
    description: `Patient presented with severe periodontal disease. Smile in a day was presented to during her consult but she was very skeptical as many people and other dentists told her this was not possible. At her initial consult she did not go through with the treatment plan. After much thought, she came back a year later and decided to go through with it and try it out. She felt no pain which was her main concern and couldn’t be happier with the results.`
  },
  {
    id: 14,
    title: 'Connective Tissue Graft Used to Treat Gum Recession',
    category: 'Connective Tissue Grafting',
    image: connectiveTissue,
    description: `Patient presented with severe gum recession on tooth #24 of about 3 mm of loss. A connective tissue graft was done to bring the 6 mm recession down to 0 mm of gum recession after one month of the procedure. A connective tissue graft is a procedure in which soft tissue was removed from the palette of the mouth and sutured over the exposed tooth root.`
  },
  {
    id: 15,
    title: 'Gums Lightened with Gum Depigmentation',
    category: 'Depigmentation',
    image: depigmentationOne,
    description: `Patient presented with severe dark pigmentation on the upper and lower arch that was very visible. The doctor treatment planned laser gum depigmentation which is a procedure that is performed to vaporize and remove a layer of soft tissue to get rid of melanin cells which in turn reduces the appearance of the dark pigmentation on the outside.`
  },
  {
    id: 16,
    title: 'Gums Lightened to Match Rest of Mouth',
    category: 'Depigmentation',
    image: depigmentationTwo,
    description: `Patient presented complaining of visible dark pigmented gum tissue. Considering the patient’s concern, laser gum depigmentation was planned for treatment. Laser gum depigmentation was then performed to vaporize and remove the thin layer of soft tissue and eliminate the cells that produce melanin.`
  },
  {
    id: 17,
    title: 'Gummy Smile Fix',
    category: 'Gingivectomy',
    image: gingivectomyOne,
    description: `Young, 31 year old, patient presented to the office with a concern of a gummy smile. She was very insecure about it all her life and thought it was time to correct it. A procedure called gingivectomy was done in which the tissue was lasered off to make it more aesthetically pleasing and so that when she smiled, less of her gum tissue would show and more of her teeth.`
  },
  {
    id: 18,
    title: 'LANAP Used for Moderate Periodontal Disease',
    category: 'Laser Gum Surgery',
    image: lanapOne,
    description: `51 year old, male, patient presented to the office with moderate periodontal disease along with heavy calculus buildup underneath the gums. Patient was advised to proceed with LANAP which is a laser gum surgery. This surgery is a minimally invasive technique that gives a very deep cleaning of the teeth under the gums allowing regeneration of what was lost.`
  },
  {
    id: 19,
    title: 'LANAP Used to Deep Clean Periodontal Disease',
    category: 'Laser Gum Surgery',
    image: lanapTwo,
    description: `Patient was suggested that she goes through laser gum surgery, also termed LANAP. This surgery is a minimally invasive technique that gives a very deep cleaning of the teeth under the gums allowing regeneration of what was lost. After 6 months, it is expected that her probing depths change from higher numbers such as 6 mm to 3 mm. She decided to go through with the surgery which resulted in high success and treatment of her moderate periodontal disease.`
  },
  {
    id: 20,
    title: 'Treatment of Gingival Recession',
    category: 'Pinhole',
    image: pinholeOne,
    description: `39 year old, female, patient presented to the office due to severe gum recession of 4 mm. She was a great candidate for the pinhole procedure that is specifically for localized gum recession. Pinhole is surgical technique that is used to correct gum recession instantly! It is scalpel free, suture free, and conventional graft free. This procedure typically takes 30 minutes with no pain or postop complications`
  },
  {
    id: 21,
    title: 'Pinhole Surgical Technique',
    category: 'Pinhole',
    image: pinholeTwo,
    description: `50 year old, female patient, presented to the office with severe dental fear. She had not visited the dentist in over 10 years due to her fear which resulted in severe gum recession and periodontal disease. In order to correct the gum recession, a procedure called Pinhole was done which resulted from 4 mm of gum recession in 0 mm of gum recession. Pinhole is surgical technique that is used to correct gum recession instantly! It is scalpel free, suture free, and conventional graft free. This procedure typically takes 30 minutes with no pain or postop complications.`
  },
  {
    id: 22,
    title: 'Improve Gum Health',
    category: 'Pinhole',
    image: pinholeThree,
    description: `Pinhole is surgical technique that is used to correct gum recession instantly! It is scalpel free, suture free, and conventional graft free. This procedure typically takes 30 minutes with no pain or postop complications.`
  },
  {
    id: 23,
    title: 'Full Multiple Teeth Transformation',
    category: 'Replacing Multiple Teeth',
    image: multipleOne,
    description: `This remarkable case showcases a complete smile restoration using advanced dental implants. From severely compromised teeth to a confident, natural-looking result, Cirillio’s transformation highlights the power of precision implant dentistry and expert care.`
  },
  {
    id: 24,
    title: 'Front Tooth Replaced with Dental Implant',
    category: 'Replacing One Tooth',
    image: singleOne,
    description: `Patient came in with a missing tooth that was very apparent when she smiled. She wanted a permanent solution that would last her many years, if not forever. The patient worked hand in hand with a periodontist and prosthodontist to get the most beautiful front tooth replaced. The periodontist and prosthodontist worked together hand in hand to insert the implant and design a tooth that looked natural but also aesthetically pleasing.`
  },
  {
    id: 25,
    title: 'Upper Denture and Lower Partial to All On 4',
    category: 'Smile in a Day',
    image: smileInADayOne,
    description: `Manhattan patient presents to the office with an upper denture and a lower partial along with periodontal disease. He hated wearing his dentures and felt like he could not enjoy his favorites foods because of the lack of function in his dentition. He also rarely smiled so he wanted a new smile to correct those issues. He went along with upper and lower All On Four done on the same day and was very satisfied with the results.`
  },
  {
    id: 26,
    title: 'All On 4 Used to Treat Severe Gum Disease',
    category: 'Smile in a Day',
    image: smileInADayTwo,
    description: `Smoker patient presented with severe gum disease. He hated his smile and wanted a new smile that was natural and as quickly as possible. Smile In A day was done where we cleaned up the bottom teeth and took out the top teeth, inserted 6 tilted implants with an All On Four Concept. He was very satisfied with the results and was shocked that it could all happen within a day.`
  },
  {
    id: 27,
    title: 'Dentures Replaced with a Smile in A Day',
    category: 'Smile in a Day',
    image: smileInADayThree,
    description: `Professor and patient presented with a partial denture that had decayed out teeth. The patient’s partial denture would fall out which led her to never smile in public. She wanted All On Four done but after doing a CBCT scan and checking her bone, she did not have enough so Dr. Nejat recommended Zygoma Implants. She had two zygomas on both sides with four more implants in the front via a minimally invasive process and received a Smile In A Day. She was super happy with the surgery and had no complications whatsoever.`
  },
  {
    id: 28,
    title: 'From Losing All Her Teeth, to a Full Smile Restoration',
    category: 'Smile in a Day',
    image: smileInADayFour,
    description: `Patient presented to the office from Pennsylvania after she had all her teeth extracted and wore a denture. She did not like the way the denture felt in her mouth and did not like the way it looked aesthetically. We went forward with a Smile In A Day and replaced her top denture with a new restoration. She felt that this felt 100x better than the denture she previously wore and looked better to the eye as well.`
  },

  {
    id: 29,
    title: 'Smile-In-A-Day Patient with Severe Periodontal Disease',
    category: 'Smile in a Day',
    image: smileInADayFive,
    description: `Patient presented with severe periodontal disease. Smile in a day was presented to during her consult but she was very skeptical as many people and other dentists told her this was not possible. At her initial consult she did not go through with the treatment plan. After much thought, she came back a year later and decided to go through with it and try it out. She felt no pain which was her main concern and couldn’t be happier with the results.`
  },
  {
    id: 30,
    title: 'Patient Was Told She Had Only One Option, Until She Came Here',
    category: 'Smile in a Day',
    image: smileInADaySix,
    description: `Patient came in for a second opinion as she was told from all the other dentists that her only option was a removable denture. She had neglected the dentist due to dental fear which resulted in bone loss and hopeless teeth. We managed to save her lower teeth and the upper was fixed with smile in a day in which the teeth were extracted and implants were placed with a fixed denture inserted all within a few hours.  She was able to fully restore here smile despite having bone loss.`
  },

  {
    id: 31,
    title: 'Teeth in an Hour',
    category: 'Teeth in an Hour',
    image: teethInAnHour,
    description: `This patient had been wearing a full upper and lower denture for many years. His profile shows a lack in fullness of the lip, over closure and creasing at the sides of the lips. This is due to the wearing down of the dentures. The goal of this treatment was to reestablish a more esthetic and proper vertical dimension and lip support, and provide the patient with a more stable and long-lasting solution than his dentures. Four implants were placed in the lower jaw, which allowed for a non-removable prosthesis to be placed on the patient – in the same visit. The patient’s facial structure was restored, and he was able to leave the office - the same day - with a smile.`
  },
  {
    id: 32,
    title: 'Zirconia Implant Used to Replace Tooth with Deep Cavity',
    category: 'Zirconia Implants',
    image: zirconiaOne,
    description: `46 year old female presented to the office with a hopeless tooth due to a deep cavity in the lower portion of her tooth along with the root. She wanted an implant placed there but wanted to go through a more holistic approach. Dr. Nejat recommended a zirconia implant and that is what the patient proceeded with.`
  },
];

const categories = ['All', 'All-on-Four', 'Connective Tissue Grafting', 'Depigmentation', 'Gingivectomy',
  'Laser Gum Surgery', 'Pinhole', 'Replacing Multiple Teeth', 'Replacing One Tooth', 'Smile in a Day', 'Teeth in an Hour', 'Zirconia Implants'];
// Holds selected subcategories; empty array means "All" selected
const selectedCategories = ref([]);

// Toggle category selection; "All" clears all others
function selectCategory(category) {
  if (category === 'All') {
    selectedCategories.value = [];
  } else {
    const index = selectedCategories.value.indexOf(category);
    if (index === -1) {
      selectedCategories.value.push(category);
    } else {
      selectedCategories.value.splice(index, 1);
    }
  }
}

// Computed filtered cards based on selected categories
const filteredCards = computed(() => {
  if (selectedCategories.value.length === 0) {
    return cards;
  }
  return cards.filter(card => selectedCategories.value.includes(card.category));
});

// Current card index in filteredCards
const currentIndex = ref(0);

// Reset currentIndex if filteredCards length changes and index out of bounds
watch(filteredCards, () => {
  if (filteredCards.value.length === 0) {
    currentIndex.value = 0;
  } else if (currentIndex.value >= filteredCards.value.length) {
    currentIndex.value = 0;
  }
});

// Navigation functions
function goNext() {
  const total = filteredCards.value.length;
  currentIndex.value = (currentIndex.value + 1) % total;
}

function goPrev() {
  const total = filteredCards.value.length;
  currentIndex.value = (currentIndex.value - 1 + total) % total;
}

function goTo(index) {
  const total = filteredCards.value.length;
  if (index >= 0 && index < total) {
    currentIndex.value = index;
  }
}
</script>

<template>
  <section class="relative default-bg-gray">
    <div class="container max-w-[1160px] px-6 mx-auto py-10">

      <div class="w-full flex items-center justify-center pb-4">
        <h1 class="text-3xl md:text-[40px] font-bold headingFont text-center w-full">
          Read About Our Patients Incredible Transformation
        </h1>
      </div>

      <hr class="my-1 w-full border-t border-gray-400 pb-4" />

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-3 pb-4">
        <button v-for="(category, index) in categories" :key="index" @click="selectCategory(category)" :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer',
          category === 'All'
            ? (selectedCategories.length === 0 ? 'bg-[#0085cc] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
            : (selectedCategories.includes(category) ? 'bg-[#0085cc] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
        ]">
          {{ category }}
        </button>
      </div>

      <!-- Responsive Layout -->
      <div class="lg:grid lg:grid-cols-[80px_1fr_80px] lg:gap-24 flex flex-col items-center">

        <!-- Prev Button (desktop only) -->
        <div class="hidden lg:flex justify-center items-center">
          <button @click="goPrev" aria-label="Previous"
            class="w-10 h-10 p-2 rounded-full cursor-pointer bg-white shadow hover:bg-gray-200 transition flex items-center justify-center">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </div>

        <!-- Card (Images + Text) -->
        <div v-if="filteredCards.length > 0" class="w-full flex justify-center">
          <div class="w-full max-w-[500px]">
            <!-- Images -->
            <picture>
              <source :srcset="filteredCards[currentIndex].image" type="image/webp" />
              <img :src="filteredCards[currentIndex].image" :alt="filteredCards[currentIndex].title"
                class="w-full h-auto md:h-[260px] object-fill rounded-t-2xl" loading="lazy" decoding="async" />
            </picture>

            <!-- Text -->
            <div class="text-start bg-white px-4 py-4 rounded-b-2xl min-h-[180px]">
              <SectionSubTitle>{{ filteredCards[currentIndex].title }}</SectionSubTitle>
              <p class="text-gray-600 mb-4 montserrat">
                <strong>{{ filteredCards[currentIndex].category }}</strong>
              </p>
              <SubParagraphText>
                {{ filteredCards[currentIndex].description }}
              </SubParagraphText>
            </div>

            <!-- Pagination dots -->
            <div class="hidden lg:flex justify-center items-center mt-4 space-x-2">
              <button v-for="(card, index) in filteredCards" :key="card.id" @click="goTo(index)"
                :aria-current="currentIndex === index ? 'true' : 'false'"
                :class="['w-1 h-1 rounded-full cursor-pointer hover:w-2 hover:h-2', currentIndex === index ? 'bg-[#0085cc] w-2 h-2' : 'bg-gray-400']"
                :aria-label="`Go to slide ${index + 1}`"></button>
            </div>

            <!-- Mobile pagination -->
            <div class="flex lg:hidden justify-between items-center mt-4 px-4">
              <!-- Prev Button -->
              <button @click="goPrev" aria-label="Previous"
                class="w-10 h-10 p-2 rounded-full cursor-pointer bg-white shadow hover:bg-gray-200 transition flex items-center justify-center">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <!-- Pagination text -->
              <span class="text-gray-700 font-medium">
                {{ currentIndex + 1 }} / {{ filteredCards.length }}
              </span>

              <!-- Next Button -->
              <button @click="goNext" aria-label="Next"
                class="w-10 h-10 p-2 rounded-full bg-white cursor-pointer shadow hover:bg-gray-200 transition flex items-center justify-center">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-10 text-gray-600 font-semibold w-full">
          No matching patients found.
        </div>

        <!-- Next Button (desktop only) -->
        <div class="hidden lg:flex justify-center items-center">
          <button @click="goNext" aria-label="Next"
            class="w-10 p-2 rounded-full cursor-pointer bg-white shadow hover:bg-gray-200 transition flex items-center justify-center">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
button:focus {
  outline: 2px solid #0085cc;
  outline-offset: 2px;
}
</style>