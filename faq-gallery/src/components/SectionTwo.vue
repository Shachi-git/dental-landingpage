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
    description: `Patient came with fractured and loose teeth seeking a new smile. She provided inspiration photos so we could design her ideal smile. She wanted a 25% reduction in her smile, which we achieved. She was extremely happy with the results.`
  },
  {
    id: 2,
    title: 'Replaced Partial Dentures for All on 4',
    category: 'All-on-Four',
    image: allonfourTwo,
    description: `Patient was referred by her allergy doctor. She thought the upper All On Four would be unaffordable. After saving, she had the procedure to regain her smile. She no longer needed partial dentures and was delighted with her smile and comfort.`
  },
  {
    id: 3,
    title: 'Upper Denture and Lower Partial to All on 4',
    category: 'All-on-Four',
    image: allonfourThree,
    description: `Manhattan patient had upper denture, lower partial, and gum issues. He disliked his dentures and couldn’t enjoy foods. He had upper and lower All On Four in one day and left fully satisfied with his new natural smile.`
  },
  {
    id: 4,
    title: 'All On 4 Used to Treat Severe Gum Disease',
    category: 'All-on-Four',
    image: allonfourFour,
    description: `Smoker presented with severe gum disease. Smile In A Day removed top teeth, cleaned bottom, and placed six tilted implants with All On Four. He was shocked by how fast it was done and very pleased with the results.`
  },
  {
    id: 5,
    title: 'Replaced Upper and Lower Dentures with All On 4',
    category: 'All-on-Four',
    image: allonfourFive,
    description: `Patient had upper and lower gum disease with partial dentures. Upper and lower All On Four transformed his smile. He felt younger, more comfortable, and very satisfied with the natural-looking results.`
  },
  {
    id: 6,
    title: 'All On 4 to Treat Bone Loss',
    category: 'All-on-Four',
    image: allonfourSix,
    description: `Patient traveled from Pittsburgh due to thin bone from severe loss. Dental fear caused decay and gum issues. He wanted his old smile back. All On 4 restored function, and he left confident and satisfied.`
  },
  {
    id: 7,
    title: 'Replaced Lower Denture with All On 4',
    category: 'All-on-Four',
    image: allonfourSeven,
    description: `Manhattan patient, former professor, wanted a lower jaw without a moving denture. Lower Smile In A Day restored eating and speaking ability. He was very impressed with the technology and happy with his results.`
  },
  {
    id: 8,
    title: 'All On 4 Treatment for Amelogenesis Imperfecta',
    category: 'All-on-Four',
    image: allonfourEight,
    description: `Patient had amelogenesis imperfecta with fragile enamel. Her son wanted her to live normally again. Upper and lower All On Four restored her smile, confidence, and ability to go out, work, and enjoy life fully.`
  },
  {
    id: 9,
    title: 'Young Patient’s Smile Restored With All on 4',
    category: 'All-on-Four',
    image: allonfourNine,
    description: `27-year-old cancer patient lost teeth from chemotherapy. Lower cavities treated, lower partial denture inserted same day as upper All On Four. Within a month, her smile and confidence were restored, improving health and self-esteem.`
  },
  {
    id: 10,
    title: 'From No Function to a Natural Smile',
    category: 'All-on-Four',
    image: allonfourTen,
    description: `Patient had mobile, worn teeth and an existing implant. She wanted a natural smile. All On Four used existing implant, added three top and four bottom implants. She was delighted with the fit, function, and overall smile improvement.`
  },
  {
    id: 11,
    title: 'Patient Got Rid of Annoying Dentures for All On 4',
    category: 'All-on-Four',
    image: allonfourEleven,
    description: `Patient disliked upper and lower dentures. Bite issues prevented chewing. Muscle reprogramming followed by All On Four corrected bite and chewing. She could finally eat normally and was extremely happy with the results.`
  },
  {
    id: 12,
    title: 'PhD with Periodontitis and Fear of Dentistry',
    category: 'All-on-Four',
    image: allonfourTwelve,
    description: `Highly educated patient had severe periodontal disease from neglect and fear. She wore a retainer to keep teeth intact. All On Four restored function and appearance. She left very happy and confident with her new smile.`
  },
  {
    id: 13,
    title: 'Smile-In-A-Day Patient with Severe Periodontal Disease',
    category: 'All-on-Four',
    image: allonfourThirteen,
    description: `Patient had severe gum disease and doubted Smile In A Day. Initially refused treatment, then returned a year later. The procedure was painless and achieved excellent results. She was extremely happy with her restored smile and function.`
  },
  {
    id: 14,
    title: 'Connective Tissue Graft Used to Treat Gum Recession',
    category: 'Connective Tissue Grafting',
    image: connectiveTissue,
    description: `Patient had 3 mm gum recession on tooth #24. Connective tissue graft reduced 6 mm of recession to 0 mm after a month. Tissue from palate was sutured over root. Gum coverage was restored and patient was satisfied.`
  },
  {
    id: 15,
    title: 'Gums Lightened with Gum Depigmentation',
    category: 'Depigmentation',
    image: depigmentationOne,
    description: `Patient had dark pigmentation across gums. Laser depigmentation removed the melanin layer, vaporizing surface tissue for lighter, uniform tone. Patient was thrilled with aesthetically improved gums.`
  },
  {
    id: 16,
    title: 'Gums Lightened to Match Rest of Mouth',
    category: 'Depigmentation',
    image: depigmentationTwo,
    description: `Patient had dark gums. Laser depigmentation removed top tissue layer, eliminating melanin-producing cells. She was very satisfied with uniform gums and improved smile aesthetics.`
  },
  {
    id: 17,
    title: 'Gummy Smile Fix',
    category: 'Gingivectomy',
    image: gingivectomyOne,
    description: `31-year-old patient was self-conscious about a gummy smile. Gingivectomy removed excess gum tissue revealing more teeth. Laser allowed precise shaping. She was pleased with natural-looking smile and increased confidence.`
  },
  {
    id: 18,
    title: 'LANAP Used for Moderate Periodontal Disease',
    category: 'Laser Gum Surgery',
    image: lanapOne,
    description: `51-year-old male had moderate gum disease with heavy calculus. LANAP laser surgery cleaned under gums while promoting tissue regeneration. He was very satisfied with reduced inflammation and healthier gums.`
  },
  {
    id: 19,
    title: 'LANAP Used to Deep Clean Periodontal Disease',
    category: 'Laser Gum Surgery',
    image: lanapTwo,
    description: `Patient underwent LANAP, a laser-assisted gum surgery. Deep cleaning under gums with tissue regeneration. Six-month follow-up expected improvement. She was happy with success and overall results.`
  },
  {
    id: 20,
    title: 'Treatment of Gingival Recession',
    category: 'Pinhole',
    image: pinholeOne,
    description: `39-year-old female had 4 mm gum recession. Pinhole procedure was minimally invasive, scalpel-free, suture-free, and graft-free, lasting 30 minutes. She had no pain and excellent immediate results with improved gum coverage.`
  },
  {
    id: 21,
    title: 'Pinhole Surgical Technique',
    category: 'Pinhole',
    image: pinholeTwo,
    description: `50-year-old female had severe dental fear and 4 mm gum loss. Pinhole procedure restored gums to 0 mm in one session, scalpel-free, suture-free, graft-free under 30 minutes. She was very satisfied with painless, immediate improvement.`
  },
  {
    id: 22,
    title: 'Improve Gum Health',
    category: 'Pinhole',
    image: pinholeThree,
    description: `Pinhole technique corrected gum recession. Procedure is scalpel-free, suture-free, no graft needed, typically 30 minutes. Patient had no pain and excellent cosmetic and functional results.`
  },
  {
    id: 23,
    title: 'Full Multiple Teeth Transformation',
    category: 'Replacing Multiple Teeth',
    image: multipleOne,
    description: `Full smile restoration with advanced implants. Compromised teeth replaced for natural, functional results. Precision implant dentistry ensured stability and aesthetics. Patient was extremely pleased with transformed, confident smile.`
  },
  {
    id: 24,
    title: 'Front Tooth Replaced with Dental Implant',
    category: 'Replacing One Tooth',
    image: singleOne,
    description: `Patient had missing front tooth. Permanent implant planned with prosthodontist to ensure aesthetics and function. New tooth matched surrounding teeth perfectly. She was very satisfied with natural-looking result and confident smile.`
  },
  {
    id: 25,
    title: 'Upper Denture and Lower Partial to All On 4',
    category: 'Smile in a Day',
    image: smileInADayOne,
    description: `Patient had upper denture, lower partial, and gum disease. She disliked dentures and wanted functional teeth. Upper and lower All On Four done in one day. She was very pleased with restored smile and confidence.`
  },
  {
    id: 26,
    title: 'All On 4 Used to Treat Severe Gum Disease',
    category: 'Smile in a Day',
    image: smileInADayTwo,
    description: `Smoker patient had severe gum disease and unattractive smile. Smile In A Day removed top teeth, cleaned bottom, placed six implants. Completed in one day. Patient was amazed and very satisfied with immediate results.`
  },
  {
    id: 27,
    title: 'Dentures Replaced with a Smile in A Day',
    category: 'Smile in a Day',
    image: smileInADayThree,
    description: `Professor patient had partial denture and decayed teeth that fell out. Zygoma implants placed due to insufficient bone, plus four front implants. Smile In A Day completed with no complications. She was extremely happy.`
  },
  {
    id: 28,
    title: 'From Losing All Her Teeth, to a Full Smile Restoration',
    category: 'Smile in a Day',
    image: smileInADayFour,
    description: `Patient lost all teeth and wore disliked denture. Smile In A Day replaced top denture with fixed restoration. Procedure felt 100x better. She was extremely pleased with aesthetics and comfort of new smile.`
  },
  {
    id: 29,
    title: 'Smile-In-A-Day Patient with Severe Periodontal Disease',
    category: 'Smile in a Day',
    image: smileInADayFive,
    description: `Patient had severe gum disease and doubted Smile In A Day. Initially hesitant, returned a year later. No pain, excellent results. Extremely happy with restored smile and function.`
  },
  {
    id: 30,
    title: 'Patient Was Told She Had Only One Option, Until She Came Here',
    category: 'Smile in a Day',
    image: smileInADaySix,
    description: `Patient sought second opinion after being told dentures were only option. Neglect caused bone loss and failing teeth. Lower teeth saved, upper extracted, implants placed. Full smile restored in hours. She was extremely satisfied.`
  },
  {
    id: 31,
    title: 'Teeth in an Hour',
    category: 'Teeth in an Hour',
    image: teethInAnHour,
    description: `Patient had worn dentures causing over-closure and lip creasing. Four implants placed on lower jaw for fixed prosthesis in single visit. Restored facial structure, lip support, and vertical dimension. Left office same day with confident, natural smile.`
  },
  {
    id: 32,
    title: 'Zirconia Implant Used to Replace Tooth with Deep Cavity',
    category: 'Zirconia Implants',
    image: zirconiaOne,
    description: `46-year-old female had hopeless lower tooth due to deep decay. Desired holistic implant lasting years. Zirconia implant placed successfully. Patient was extremely pleased with aesthetics and stability of new tooth.`
  }
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

      <!-- Heading -->
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

      <!-- Slider Layout -->
      <div class="lg:gap-24 flex flex-row items-center">

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

        <!-- Slider -->
        <div class="w-full flex justify-center">
          <div class="w-full max-w-[500px] overflow-x-hidden relative pb-2">
            <div class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }">

              <div v-for="card in filteredCards" :key="card.id" class="flex-shrink-0 w-full px-5">
                <!-- Image -->
                <picture>
                  <source :srcset="card.image" type="image/webp" />
                  <img :src="card.image" :alt="card.title"
                    class="w-full h-[150px] sm:h-[220px] object-cover rounded-t-2xl shadow shadow-gray-300"
                    loading="lazy" />
                </picture>

                <!-- Text -->
                <div class="text-start bg-white px-4 py-4 rounded-b-2xl min-h-[180px] shadow shadow-gray-300">
                  <SectionSubTitle>{{ card.title }}</SectionSubTitle>
                  <p class="text-gray-600 mb-4">
                    <strong>{{ card.category }}</strong>
                  </p>
                  <SubParagraphText>
                    {{ card.description }}
                  </SubParagraphText>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Next Button (desktop only) -->
        <div class="hidden lg:flex justify-center items-center">
          <button @click="goNext" aria-label="Next"
            class="w-10 h-10 p-2 rounded-full cursor-pointer bg-white shadow hover:bg-gray-200 transition flex items-center justify-center">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>

      <!-- Pagination Dots (desktop) -->
      <div class="hidden lg:flex justify-center mt-4">
        <div class="flex items-center space-x-2">
          <button v-for="(card, index) in filteredCards" :key="card.id" @click="goTo(index)"
            :aria-current="currentIndex === index ? 'true' : 'false'" :class="[
              'w-1 h-1 rounded-full cursor-pointer hover:bg-[#0085cc]',
              currentIndex === index ? 'bg-[#0085cc] w-2 h-2' : 'bg-gray-400'
            ]" :aria-label="`Go to slide ${index + 1}`"></button>
        </div>
      </div>

      <!-- Mobile Pagination -->
      <div class="flex lg:hidden justify-between items-center px-4 mt-4">
        <button @click="goPrev" aria-label="Previous"
          class="w-10 h-10 p-2 rounded-full cursor-pointer bg-white shadow hover:bg-gray-200 transition flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <span class="text-gray-700 font-medium">
          {{ currentIndex + 1 }} / {{ filteredCards.length }}
        </span>

        <button @click="goNext" aria-label="Next"
          class="w-10 h-10 p-2 rounded-full cursor-pointer bg-white shadow hover:bg-gray-200 transition flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <!-- Empty State -->
      <div v-if="filteredCards.length === 0" class="text-center py-10 text-gray-600 font-semibold w-full">
        No matching patients found.
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