// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import { reactive } from 'vue'
import SectionSubTitle from './SectionSubTitle.vue'
import SubParagraphText from './SubParagraphText.vue'

const faqs = reactive([
    {
        question: 'Where do I start?',
        answer:
            `You can begin your journey toward a beautiful smile by making an appointment with one of our highly experienced New York City periodontists. Give us a call or click here to set up your appointment today.
       <br/><br/>Dental implants feel so natural and look so good, you just may forget you ever lost a tooth!`,
        open: false,
    },
    {
        question: 'In what situation then, if any, would a dentist recommend a tooth supported bridge?',
        answer: `Until recently, most dentists considered conventional bridges the treatment of choice for replacing missing or lost teeth. However, over the past decade there have been tremendous advancements in dental implant systems allowing more options for dentists.
  <br/><br/>Sometimes if the adjacent teeth have large restorations (fillings) that must be replaced or if the teeth are severely broken down, a tooth supported bridge may be the best option because those teeth could benefit from the protection of crowns attached to traditional bridges.
  <br/><br/>Most dentists, however, detest the idea of grinding down perfect teeth in order to place a traditional bridge and will therefore recommend dental implants in these cases.`,
        open: false,
    },
    {
        question: 'How long do implants last?',
        answer: `Published clinical research shows that implant supported restorations have been successful for over 30 years with success rates now reaching over 95%. These cases were carefully followed from the very beginning and are likely to remain successful for the lifetime of these patients.
    <br/><br/>Dental implants are designed to be permanent but there are many factors that contribute to their longevity. Home care and regular visits to the dentist or specialist are probably the most critical aspects. However, smoking, grinding of the teeth, or too much pressure on the implants can alter their success.
    <br/><br/>By comparison, research shows that the typical tooth supported bridge lasts from 7-10 years and that partials and dentures last an average of only 5 years. In fact, insurance companies expect that bridges, partials, and dentures will last 5 years and will therefore pay for replacements every 5 years.`,
        open: false,
    },
    {
        question: 'What if I have already lost all of my teeth?',
        answer: `If you are a denture wearer and are having problems keeping your dentures in place or you cannot enjoy some of your favorite foods, implants can still make a big difference for you. Depending on your individual case, anywhere from 2 to 8 implants can be placed in each jaw to anchor your dentures in place. No more wobbling or clicking; no more messy pastes and glues. You will be free to enjoy all of your favorite foods with confidence and comfort.`,
        open: false,
    },
    {
        question: 'What are some of the benefits of dental implants?',
        answer: `They look and feel just like your own teeth. Dental implants restore your confidence to talk, laugh, and chew with comfort and without worries.
    <br/><br/>Implants preserve the integrity of facial structures. Implants prevent the hard and soft tissue collapse that can occur under conventional bridges and removable partial dentures. In patients who have lost all of their teeth, the lower one-third of the face is prone to collapse if implants are not placed to preserve the bone and the facial profile. Implants form a strong bond to the surrounding bone to provide support and anchorage for biting and chewing as well as stimulation for the bone to hold it in place.
    <br/><br/>Implant-supported crowns and bridges do not require neighboring teeth for support. When teeth are replaced using traditional tooth-supported bridges, the teeth on either side of the missing tooth are ground down so that the bridge can be cemented onto them. This tooth structure can never be replaced. Removable partial dentures use clasps and rests which have to be carved onto adjacent teeth. As the partial rocks back and forth, it can loosen the teeth it depends on for anchorage, causing them to be lost.
    <br/><br/>Implants replace the entire tooth and the missing root so it is a free-standing restoration. This leaves more of your natural teeth untouched and free of restorations which saves your natural teeth.
    <br/><br/>Better health and nutrition because you can eat what you want. Patients with dentures often find themselves unable to eat certain foods, such as fruits and vegetables, which can compromise their nutrition. With dental implants, it is much easier to bite into and chew your favorite foods.
    <br/><br/>Ease of cleansing. An implant supported crown can be cleaned like your other natural teeth, i.e. brushing and flossing. Cleaning under a bridge, however, requires the use of floss threaders for proper cleaning, while a partial must be taken out several times a day and scrubbed clean.
    <br/><br/>Enjoy your food. Patients who wear an upper denture often have trouble really tasting food because the roof of the mouth is covered. With implant supported replacement teeth, it is not necessary to cover the roof of the mouth, so it is possible to enjoy the taste of all your favorite foods.`,
        open: false,
    },
    {
        question: 'So, what is a dental implant?',
        answer: `Dental implants are screw-shaped or cylindrical root-form titanium posts that act as artificial tooth roots. These are carefully placed in the jawbone and allowed to heal. During the healing phase, your bone is growing right up to the implant surface in order to lock it in place.
    <br/><br/>Shortly thereafter, a crown is made to fit on top of the implant’s) so as to replace a missing tooth or teeth with a “brand-new” tooth. In many cases, you can be functioning on your “new” tooth in as little as 6 weeks!`,
        open: false,
    },
])

function toggle(index) {
    faqs.forEach((faq, i) => {
        faq.open = i === index ? !faq.open : false
    })
}
</script>

<template>
    <section class="relative default-bg-gray">
        <div class="container max-w-[1160px] px-6 mx-auto py-10">
            <div class="w-full flex items-center justify-center pb-4">
                <h1 class="text-3xl uppercase md:text-[40px] text-center w-full default-gray headingFont">
                    Frequently Asked Questions
                </h1>
            </div>

            <hr className="my-1 w-full border-t border-gray-400 pb-4" />
            <div v-for="(faq, index) in faqs" :key="index" class="border-b px-4 border-gray-300 py-4">

                <!-- Toggle Button -->
                <button @click="toggle(index)"
                    class="w-full hover:text-[#0085cc] cursor-pointer flex justify-between items-center text-left font-normal text-lg">
                    <SectionSubTitle class="flex-1">
                        {{ faq.question }}
                    </SectionSubTitle>

                    <svg :class="faq.open ? 'rotate-180' : ''"
                        class="w-5 h-5 flex-shrink-0 ml-2 transform transition-transform duration-200" fill="none"
                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>

                <!-- Tailwind Transition for Height -->
                <div :class="faq.open ? 'max-h-[500px]' : 'max-h-0'"
                    class="overflow-hidden transition-all duration-300 ease-in-out">
                    <SubParagraphText v-html="faq.answer" class="mt-2 text-gray-600 text-sm pb-4" />
                </div>
            </div>
            <div class="w-full flex items-center justify-center pt-4">
                <a href="https://www.dentalimplantsusa.com/dental-implants-faq" target="_blank"
                    rel="noopener noreferrer" className="mt-4 btn font-semibold px-6 py-2 transition-colors"
                    aria-label="Show all Frequently asked questions">
                    Show All FAQs
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Optional: Add spacing or animation styles here */
</style>