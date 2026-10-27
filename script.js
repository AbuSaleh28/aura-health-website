// Aura Health & Medical Center Multi-Page Router & Interactivity

const doctorsData = [
    {
        name: "Dr. Ayesha Khan, MBBS, FCPS",
        specialty: "Cardiology & Vascular Surgery",
        department: "Cardiology",
        experience: "18+ Years Experience",
        rating: 4.9,
        reviews: 142,
        image: "images/doctor-ayesha.jpg",
        fallbackImage: "images/doctor-ayesha.jpg",
        bio: "Consultant cardiologist specializing in minimally invasive valve procedures and advanced coronary care."
    },
    {
        name: "Dr. Hamza Siddiqui, MBBS, FCPS",
        specialty: "Neurology & Neurosurgery",
        department: "Neurology",
        experience: "22+ Years Experience",
        rating: 4.9,
        reviews: 198,
        image: "images/doctor-hamza.jpg",
        fallbackImage: "images/doctor-hamza.jpg",
        bio: "Consultant neurologist focused on stroke care, epilepsy treatment, and complex neurological conditions."
    },
    {
        name: "Dr. Fatima Ahmed, MBBS, FCPS",
        specialty: "Pediatrics & Neonatology",
        department: "Pediatrics",
        experience: "14+ Years Experience",
        rating: 4.8,
        reviews: 110,
        image: "images/doctor-fatima.jpg",
        fallbackImage: "images/doctor-fatima.jpg",
        bio: "Consultant paediatrician providing childhood wellness, developmental care, and newborn support."
    },
    {
        name: "Dr. Muhammad Usman, MBBS, FCPS",
        specialty: "Oncology & Cancer Care",
        department: "Oncology",
        experience: "20+ Years Experience",
        rating: 5.0,
        reviews: 215,
        image: "images/doctor-usman.jpg",
        fallbackImage: "images/doctor-usman.jpg",
        bio: "Consultant medical oncologist specializing in evidence-based cancer treatment and supportive care."
    },
    {
        name: "Dr. Zainab Shah, MBBS, FCPS",
        specialty: "Orthopedic & Joint Surgery",
        department: "Orthopedics",
        experience: "16+ Years Experience",
        rating: 4.9,
        reviews: 164,
        image: "images/doctor-zainab.jpg",
        fallbackImage: "images/doctor-zainab.jpg",
        bio: "Orthopaedic surgeon specializing in joint replacement, sports injuries, and mobility restoration."
    },
    {
        name: "Dr. Bilal Qureshi, MBBS, FCPS",
        specialty: "Advanced Diagnostics & Radiology",
        department: "Diagnostics",
        experience: "15+ Years Experience",
        rating: 4.8,
        reviews: 89,
        image: "images/doctor-bilal.jpg",
        fallbackImage: "images/doctor-bilal.jpg",
        bio: "Consultant radiologist specializing in MRI, CT, and diagnostic imaging."
    }
];

const departmentsData = [
    {
        id: "cardiology",
        title: "Cardiology & Vascular Surgery",
        icon: "fa-heart-pulse",
        description: "State-of-the-art cardiovascular care offering interventional cardiology, electrophysiology, and robotic heart bypass surgeries.",
        head: "Dr. Ayesha Khan, MBBS, FCPS",
        services: ["Coronary Angioplasty & Stenting", "Advanced Electrophysiology", "Minimally Invasive Valve Repair", "Heart Failure Management"]
    },
    {
        id: "neurology",
        title: "Neurology & Neurosurgery",
        icon: "fa-brain",
        description: "Comprehensive care for complex neurological disorders including stroke intervention, epilepsy monitoring, and neuro-oncology.",
        head: "Dr. Hamza Siddiqui, MBBS, FCPS",
        services: ["Comprehensive Stroke Center", "Deep Brain Stimulation", "Skull-Base Tumor Surgery", "Advanced EEG & Epilepsy Monitoring"]
    },
    {
        id: "pediatrics",
        title: "Pediatrics & Neonatology",
        icon: "fa-child-reaching",
        description: "Gentle, specialized care for infants, children, and adolescents backed by a Level-IV Neonatal Intensive Care Unit (NICU).",
        head: "Dr. Fatima Ahmed, MBBS, FCPS",
        services: ["Neonatal Intensive Care (NICU)", "Pediatric Emergency Medicine", "Developmental & Behavioral Pediatrics", "Childhood Immunization Clinics"]
    },
    {
        id: "oncology",
        title: "Oncology & Cancer Care",
        icon: "fa-dna",
        description: "Multidisciplinary cancer center combining clinical trials, precision immunotherapy, and advanced radiation oncology.",
        head: "Dr. Muhammad Usman, MBBS, FCPS",
        services: ["Medical Oncology & Infusion", "Stereotactic Radiosurgery (SRS)", "Genetic Cancer Risk Counseling", "Palliative & Supportive Care"]
    },
    {
        id: "orthopedics",
        title: "Orthopedics & Joint Replacement",
        icon: "fa-bone",
        description: "Restoring mobility through robotic-assisted joint replacements, spine surgery, and regenerative sports medicine.",
        head: "Dr. Zainab Shah, MBBS, FCPS",
        services: ["Robotic Knee & Hip Replacement", "Arthroscopic Sports Surgery", "Complex Spinal Reconstruction", "Physical Therapy & Rehabilitation"]
    },
    {
        id: "diagnostics",
        title: "Advanced Diagnostics & Radiology",
        icon: "fa-x-ray",
        description: "High-precision imaging and clinical laboratory services providing rapid, definitive diagnostic insights.",
        head: "Dr. Bilal Qureshi, MBBS, FCPS",
        services: ["3T Wide-Bore MRI & CT Scanning", "PET-CT Molecular Imaging", "Digital Mammography & Ultrasound", "Clinical Pathology & Genetics Lab"]
    }
];

// Page navigation
function switchPage(pageId) {
    const pageFiles = {
        home: 'index.html',
        departments: 'departments.html',
        doctors: 'doctors.html',
        'patient-portal': 'patient-portal.html',
        about: 'about.html',
        contact: 'contact.html'
    };

    if (pageFiles[pageId]) {
        window.location.href = pageFiles[pageId];
    }
}

function renderPage(pageId) {
    document.querySelectorAll('.nav-btn').forEach(link => {
        const isCurrentPage = link.getAttribute('data-page') === pageId;
        link.classList.toggle('active', isCurrentPage);
        if (isCurrentPage) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });

    const container = document.getElementById('app-container');
    if (!container) return;

    if (pageId === 'home') {
        container.innerHTML = renderHomePage();
    } else if (pageId === 'departments') {
        container.innerHTML = renderDepartmentsPage();
    } else if (pageId === 'doctors') {
        container.innerHTML = renderDoctorsPage();
        initDoctorFilters();
    } else if (pageId === 'patient-portal') {
        container.innerHTML = renderPatientPortalPage();
    } else if (pageId === 'about') {
        container.innerHTML = renderAboutPage();
    } else if (pageId === 'contact') {
        container.innerHTML = renderContactPage();
    }
}

// Render Home Page
function renderHomePage() {
    return `
        <!-- Hero Section -->
        <section class="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 border-b border-slate-800">
            <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div class="lg:col-span-7 space-y-6">
                        <div class="inline-flex items-center space-x-2 bg-medical-teal/10 border border-medical-teal/30 px-3 py-1.5 rounded-full text-medical-teal text-xs font-semibold tracking-wide uppercase">
                            <i class="fa-solid fa-award"></i>
                            <span>Ranked #1 Regional Medical Center 2026</span>
                        </div>
                        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                            Advanced Medicine. <br><span class="bg-gradient-to-r from-medical-teal via-emerald-400 to-medical-blue bg-clip-text text-transparent">Compassionate Healing.</span>
                        </h1>
                        <p class="text-slate-300 text-lg leading-relaxed max-w-2xl">
                            Aura Health & Medical Center combines world-class clinical expertise, cutting-edge surgical robotics, and personalized patient care to redefine healthcare standards.
                        </p>
                        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                            <button onclick="openAppointmentModal()" class="bg-gradient-to-r from-medical-teal to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-teal-900/40 transition flex items-center justify-center space-x-2">
                                <i class="fa-regular fa-calendar-check text-lg"></i>
                                <span>Book an Appointment</span>
                            </button>
                            <button onclick="switchPage('doctors')" class="bg-slate-800 hover:bg-slate-750 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition flex items-center justify-center space-x-2">
                                <i class="fa-solid fa-user-doctor text-medical-teal text-lg"></i>
                                <span>Find a Specialist</span>
                            </button>
                        </div>

                        <div class="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                            <div>
                                <h4 class="text-3xl font-black text-white">99.8%</h4>
                                <p class="text-xs text-slate-400 mt-1 uppercase tracking-wider">Patient Satisfaction</p>
                            </div>
                            <div>
                                <h4 class="text-3xl font-black text-white">45+</h4>
                                <p class="text-xs text-slate-400 mt-1 uppercase tracking-wider">Medical Specialists</p>
                            </div>
                            <div>
                                <h4 class="text-3xl font-black text-white">24/7</h4>
                                <p class="text-xs text-slate-400 mt-1 uppercase tracking-wider">Trauma & ICU Care</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-5 relative">
                        <div class="relative mx-auto max-w-md lg:max-w-none">
                            <div class="absolute -inset-1.5 bg-gradient-to-r from-medical-teal to-medical-blue rounded-3xl blur-xl opacity-30"></div>
                            <div class="relative bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" alt="Hospital Interior" class="w-full h-80 object-cover">
                                <div class="p-6 space-y-4">
                                    <div class="flex items-center justify-between">
                                        <span class="text-xs font-bold text-medical-teal uppercase tracking-wider bg-medical-teal/10 px-3 py-1 rounded-full">Excellence in Care</span>
                                        <span class="text-xs text-slate-400"><i class="fa-solid fa-shield-halved text-medical-teal mr-1"></i> JCI Accredited</span>
                                    </div>
                                    <h3 class="text-xl font-bold text-white">State-of-the-Art Clinical Campus</h3>
                                    <p class="text-slate-400 text-sm">Equipped with next-generation robotic surgery suites, 3T MRI diagnostics, and dedicated intensive care units.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Departments Preview Grid -->
        <section class="py-20 bg-slate-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 class="text-xs font-bold text-medical-teal uppercase tracking-widest">Centers of Clinical Excellence</h2>
                    <h3 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Specialized Medical Care Tailored For You</h3>
                    <p class="text-slate-400 text-sm sm:text-base">Explore our core clinical departments staffed by globally recognized physicians and medical scientists.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${departmentsData.slice(0, 6).map(dept => `
                        <div class="bg-slate-800/80 border border-slate-750 hover:border-medical-teal/50 rounded-2xl p-8 transition duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg">
                            <div class="space-y-4">
                                <div class="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-medical-teal text-2xl group-hover:bg-medical-teal group-hover:text-white transition duration-300">
                                    <i class="fa-solid ${dept.icon}"></i>
                                </div>
                                <h4 class="text-xl font-bold text-white group-hover:text-medical-teal transition">${dept.title}</h4>
                                <p class="text-slate-400 text-sm leading-relaxed">${dept.description}</p>
                            </div>
                            <div class="pt-6 mt-6 border-t border-slate-700/60 flex items-center justify-between">
                                <span class="text-xs text-slate-400 font-medium"><i class="fa-solid fa-user-doctor mr-1.5 text-medical-teal"></i> ${dept.head.split(',')[0]}</span>
                                <button onclick="switchPage('departments')" class="text-medical-teal hover:text-white font-semibold text-sm flex items-center space-x-1 transition">
                                    <span>Explore</span>
                                    <i class="fa-solid fa-arrow-right text-xs"></i>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="text-center mt-12">
                    <button onclick="switchPage('departments')" class="bg-slate-800 hover:bg-slate-750 text-white font-semibold px-8 py-3.5 rounded-xl border border-slate-700 transition inline-flex items-center space-x-2">
                        <span>View All Clinical Departments</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- Why Choose Aura Health -->
        <section class="py-20 bg-slate-950 border-t border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <h2 class="text-xs font-bold text-medical-teal uppercase tracking-widest">The Aura Advantage</h2>
                        <h3 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Why Patients Trust Aura Health Center</h3>
                        <p class="text-slate-400 leading-relaxed">
                            We believe that exceptional healthcare requires more than advanced technology—it demands profound empathy, rigorous clinical protocols, and a commitment to patient dignity.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-4 bg-slate-900 border border-slate-800 p-4 rounded-xl">
                                <div class="w-10 h-10 rounded-lg bg-medical-teal/10 text-medical-teal flex items-center justify-center font-bold flex-shrink-0">
                                    <i class="fa-solid fa-user-check"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold">World-Renowned Physicians</h4>
                                    <p class="text-xs text-slate-400 mt-1">Our medical staff includes Ivy-League trained specialists with decades of clinical research and practice.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4 bg-slate-900 border border-slate-800 p-4 rounded-xl">
                                <div class="w-10 h-10 rounded-lg bg-medical-teal/10 text-medical-teal flex items-center justify-center font-bold flex-shrink-0">
                                    <i class="fa-solid fa-microchip"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold">Next-Generation Medical Technology</h4>
                                    <p class="text-xs text-slate-400 mt-1">Featuring da Vinci robotic surgical systems, 3T MRI, and fully digitized electronic patient records.</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4 bg-slate-900 border border-slate-800 p-4 rounded-xl">
                                <div class="w-10 h-10 rounded-lg bg-medical-teal/10 text-medical-teal flex items-center justify-center font-bold flex-shrink-0">
                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold">24/7 Comprehensive Support</h4>
                                    <p class="text-xs text-slate-400 mt-1">Round-the-clock emergency trauma response, ICU monitoring, and secure patient portal access.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80" alt="Hospital Room" class="rounded-2xl object-cover h-64 w-full shadow-lg">
                        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" alt="Doctor Consultation" class="rounded-2xl object-cover h-64 w-full shadow-lg mt-8">
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Render Departments Page
function renderDepartmentsPage() {
    return `
        <div class="py-16 bg-slate-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 class="text-xs font-bold text-medical-teal uppercase tracking-widest">Clinical Departments</h1>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Centers of Excellence & Medical Specialties</h2>
                    <p class="text-slate-400 text-base">Our multidisciplinary clinical departments provide comprehensive diagnostics, advanced surgical interventions, and long-term rehabilitation.</p>
                </div>

                <div class="space-y-12">
                    ${departmentsData.map((dept, index) => `
                        <div id="${dept.id}" class="bg-slate-800 border border-slate-700 rounded-3xl p-8 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div class="lg:col-span-5 space-y-6">
                                <div class="w-16 h-16 rounded-2xl bg-medical-teal/10 border border-medical-teal/30 flex items-center justify-center text-medical-teal text-3xl">
                                    <i class="fa-solid ${dept.icon}"></i>
                                </div>
                                <h3 class="text-2xl sm:text-3xl font-bold text-white">${dept.title}</h3>
                                <p class="text-slate-300 leading-relaxed text-sm sm:text-base">${dept.description}</p>
                                <div class="p-4 bg-slate-900/80 rounded-xl border border-slate-750">
                                    <span class="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Department Head</span>
                                    <span class="text-white font-bold text-base"><i class="fa-solid fa-user-doctor text-medical-teal mr-2"></i>${dept.head}</span>
                                </div>
                                <button onclick="openAppointmentModal()" class="bg-medical-teal hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition shadow-lg shadow-teal-900/30">
                                    Book Department Consultation
                                </button>
                            </div>
                            <div class="lg:col-span-7 bg-slate-900/90 border border-slate-750 rounded-2xl p-6 sm:p-8 space-y-6">
                                <h4 class="text-white font-bold text-lg border-b border-slate-700 pb-3">Key Clinical Procedures & Services</h4>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    ${dept.services.map(service => `
                                        <div class="flex items-center space-x-3 bg-slate-800 p-3.5 rounded-xl border border-slate-750">
                                            <i class="fa-solid fa-circle-check text-medical-teal"></i>
                                            <span class="text-slate-200 text-sm font-medium">${service}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Render Doctors Page
function renderDoctorsPage() {
    return `
        <div class="py-16 bg-slate-900 min-h-screen">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <h1 class="text-xs font-bold text-medical-teal uppercase tracking-widest">Medical Staff Directory</h1>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Find Your Specialist</h2>
                    <p class="text-slate-400 text-base">Search our esteemed faculty by name, specialty, or clinical department.</p>
                </div>

                <!-- Search & Filter Controls -->
                <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl mb-12">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Search Doctor Name</label>
                            <div class="relative">
                                <i class="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-slate-400"></i>
                                <input type="text" id="doctor-search-input" oninput="filterDoctors()" placeholder="e.g. Dr. Ayesha Khan" class="w-full bg-slate-900 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-white focus:outline-none focus:border-medical-teal transition">
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Filter by Department</label>
                            <select id="department-filter" onchange="filterDoctors()" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-medical-teal transition">
                                <option value="all">All Departments</option>
                                <option value="Cardiology">Cardiology & Vascular Surgery</option>
                                <option value="Neurology">Neurology & Neurosurgery</option>
                                <option value="Pediatrics">Pediatrics & Neonatology</option>
                                <option value="Oncology">Oncology & Cancer Care</option>
                                <option value="Orthopedics">Orthopedics & Joint Replacement</option>
                                <option value="Diagnostics">Advanced Diagnostics & Radiology</option>
                            </select>
                        </div>
                        <div class="flex items-end">
                            <button onclick="resetDoctorFilters()" class="w-full bg-slate-700 hover:bg-slate-650 text-slate-200 font-semibold py-2.5 rounded-xl transition">
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Doctors Grid -->
                <div id="doctors-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Injected dynamically -->
                </div>
            </div>
        </div>
    `;
}

function initDoctorFilters() {
    renderDoctorsList(doctorsData);
}

function renderDoctorsList(list) {
    const grid = document.getElementById('doctors-grid');
    if (!grid) return;

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-16 bg-slate-800/50 rounded-2xl border border-slate-700">
                <i class="fa-solid fa-user-doctor text-slate-500 text-4xl mb-3"></i>
                <h3 class="text-lg font-bold text-white">No specialists found</h3>
                <p class="text-slate-400 text-sm mt-1">Try adjusting your search criteria or department filter.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = list.map(doc => `
        <div class="bg-slate-800 border border-slate-700 hover:border-medical-teal/50 rounded-2xl overflow-hidden shadow-xl transition flex flex-col justify-between group">
            <div>
                <div class="relative h-64 overflow-hidden bg-slate-900">
                    <img src="${doc.image}" alt="Portrait of ${doc.name}" class="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500" loading="lazy" onerror="this.onerror=null;this.src='${doc.fallbackImage}'">
                    <div class="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-medical-teal border border-slate-700 flex items-center space-x-1">
                        <i class="fa-solid fa-star text-amber-400"></i>
                        <span>${doc.rating} (${doc.reviews})</span>
                    </div>
                </div>
                <div class="p-6 space-y-3">
                    <span class="text-xs font-semibold uppercase tracking-wider text-medical-teal bg-medical-teal/10 px-2.5 py-1 rounded-md inline-block">${doc.specialty}</span>
                    <h3 class="text-xl font-bold text-white">${doc.name}</h3>
                    <p class="text-xs text-slate-400 font-medium">${doc.experience}</p>
                    <p class="text-slate-300 text-sm leading-relaxed">${doc.bio}</p>
                </div>
            </div>
            <div class="p-6 pt-0">
                <button onclick="openAppointmentModal()" class="w-full bg-slate-900 hover:bg-medical-teal text-slate-200 hover:text-white font-semibold py-3 rounded-xl border border-slate-700 hover:border-medical-teal transition flex items-center justify-center space-x-2">
                    <i class="fa-regular fa-calendar-check"></i>
                    <span>Book Appointment</span>
                </button>
            </div>
        </div>
    `).join('');
}

function filterDoctors() {
    const searchTerms = document.getElementById('doctor-search-input').value
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(Boolean);
    const deptFilter = document.getElementById('department-filter').value;

    const filtered = doctorsData.filter(doc => {
        const searchableWords = `${doc.name} ${doc.specialty} ${doc.department}`
            .toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(Boolean);
        const matchesSearch = searchTerms.every(term => searchableWords.some(word => word.startsWith(term)));
        const matchesDept = deptFilter === 'all' || doc.department === deptFilter;
        return matchesSearch && matchesDept;
    });

    renderDoctorsList(filtered);
}

function resetDoctorFilters() {
    document.getElementById('doctor-search-input').value = '';
    document.getElementById('department-filter').value = 'all';
    renderDoctorsList(doctorsData);
}

// Render Patient Portal Page
function renderPatientPortalPage() {
    return `
        <div class="py-20 bg-slate-900 min-h-[80vh] flex items-center">
            <div class="max-w-md mx-auto px-4 w-full">
                <div class="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl space-y-6">
                    <div class="text-center space-y-2">
                        <div class="w-14 h-14 bg-medical-teal/10 border border-medical-teal/30 rounded-2xl mx-auto flex items-center justify-center text-medical-teal text-2xl">
                            <i class="fa-solid fa-lock"></i>
                        </div>
                        <h1 class="text-2xl font-bold text-white">Patient Portal Login</h1>
                        <p class="text-xs text-slate-400">Access your electronic medical records, lab reports, and upcoming visits securely.</p>
                    </div>

                    <form onsubmit="handlePortalLogin(event)" class="space-y-4">
                        <div>
                            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Patient ID or Email</label>
                            <input type="text" required class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-medical-teal transition" placeholder="patient@aurahealth.org">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Secure Password</label>
                            <input type="password" required class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-medical-teal transition" placeholder="••••••••••••">
                        </div>
                        <div class="flex items-center justify-between text-xs">
                            <label class="flex items-center space-x-2 text-slate-400 cursor-pointer">
                                <input type="checkbox" class="rounded bg-slate-900 border-slate-700 text-medical-teal focus:ring-0">
                                <span>Remember this device</span>
                            </label>
                            <a href="#" class="text-medical-teal hover:underline">Forgot password?</a>
                        </div>
                        <button type="submit" class="w-full bg-gradient-to-r from-medical-teal to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal-900/30 transition">
                            Sign In to Portal
                        </button>
                    </form>

                    <div class="border-t border-slate-700 pt-4 text-center">
                        <p class="text-xs text-slate-400">New patient? <a href="#" onclick="openAppointmentModal()" class="text-medical-teal font-semibold hover:underline">Register & book your first visit</a></p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handlePortalLogin(e) {
    e.preventDefault();
    alert("Secure portal authentication simulated successfully. Welcome to Aura Health Patient Dashboard.");
}

// Render About Page
function renderAboutPage() {
    return `
        <div class="py-16 bg-slate-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                <!-- Header -->
                <div class="text-center max-w-3xl mx-auto space-y-4">
                    <h1 class="text-xs font-bold text-medical-teal uppercase tracking-widest">About Aura Health</h1>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Pioneering Clinical Excellence Since 2008</h2>
                    <p class="text-slate-400 text-base">Aura Health & Medical Center is a world-class academic medical institution committed to transforming patient outcomes through exceptional clinical care and medical research.</p>
                </div>

                <!-- Mission & Vision -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-slate-800 border border-slate-700 p-8 rounded-3xl space-y-4 shadow-xl">
                        <div class="w-12 h-12 bg-medical-teal/10 rounded-xl flex items-center justify-center text-medical-teal text-xl">
                            <i class="fa-solid fa-bullseye"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white">Our Core Mission</h3>
                        <p class="text-slate-300 leading-relaxed text-sm sm:text-base">
                            To provide compassionate, evidence-based healthcare of the highest caliber to every patient, while advancing medical science through rigorous clinical research and physician education.
                        </p>
                    </div>
                    <div class="bg-slate-800 border border-slate-700 p-8 rounded-3xl space-y-4 shadow-xl">
                        <div class="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center text-medical-blue text-xl">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white">Our Vision for the Future</h3>
                        <p class="text-slate-300 leading-relaxed text-sm sm:text-base">
                            To be the global benchmark for patient-centered clinical innovation, setting new standards in robotic surgery, preventive medicine, and compassionate community care.
                        </p>
                    </div>
                </div>

                <!-- Accreditations / Stats -->
                <div class="bg-slate-800/80 border border-slate-700 rounded-3xl p-10 text-center space-y-8">
                    <h3 class="text-2xl font-bold text-white">Accreditations & Quality Standards</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div class="text-4xl font-black text-medical-teal mb-1">JCI</div>
                            <p class="text-xs text-slate-400 uppercase tracking-wider">Gold Seal Accredited</p>
                        </div>
                        <div>
                            <div class="text-4xl font-black text-medical-teal mb-1">Magnet</div>
                            <p class="text-xs text-slate-400 uppercase tracking-wider">Nursing Excellence</p>
                        </div>
                        <div>
                            <div class="text-4xl font-black text-medical-teal mb-1">Level 1</div>
                            <p class="text-xs text-slate-400 uppercase tracking-wider">Trauma Center Status</p>
                        </div>
                        <div>
                            <div class="text-4xl font-black text-medical-teal mb-1">Top 100</div>
                            <p class="text-xs text-slate-400 uppercase tracking-wider">Hospitals Nationwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render Contact Page
function renderContactPage() {
    return `
        <div class="py-16 bg-slate-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 class="text-xs font-bold text-medical-teal uppercase tracking-widest">Get in Touch</h1>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Contact Aura Health Center</h2>
                    <p class="text-slate-400 text-base">We are here to answer your inquiries, assist with appointment scheduling, and provide directions to our campus.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div class="bg-slate-800 border border-slate-700 p-8 sm:p-10 rounded-3xl space-y-8 shadow-xl">
                        <h3 class="text-2xl font-bold text-white">Send Us a Message</h3>
                        <form onsubmit="handleContactSubmit(event)" class="space-y-4">
                            <div>
                                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Your Name *</label>
                                <input type="text" required class="w-full bg-slate-900 border border-slate-750 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-medical-teal transition" placeholder="Jane Smith">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Email Address *</label>
                                <input type="email" required class="w-full bg-slate-900 border border-slate-750 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-medical-teal transition" placeholder="jane@example.com">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Subject *</label>
                                <input type="text" required class="w-full bg-slate-900 border border-slate-750 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-medical-teal transition" placeholder="General Inquiry / Billing">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Message *</label>
                                <textarea rows="4" required class="w-full bg-slate-900 border border-slate-750 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-medical-teal transition" placeholder="How can our team assist you?"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-medical-teal hover:bg-teal-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal-900/30 transition">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div class="space-y-8">
                        <div class="bg-slate-800 border border-slate-700 p-8 rounded-3xl space-y-6 shadow-xl">
                            <h3 class="text-xl font-bold text-white">Hospital Headquarters</h3>
                            <ul class="space-y-4 text-slate-300">
                                <li class="flex items-start space-x-4">
                                    <div class="w-10 h-10 rounded-xl bg-medical-teal/10 text-medical-teal flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-location-dot"></i></div>
                                    <div>
                                        <strong class="text-white block">Address</strong>
                                        <span>Plot 14, Jinnah Avenue, Blue Area, Islamabad, Pakistan</span>
                                    </div>
                                </li>
                                <li class="flex items-start space-x-4">
                                    <div class="w-10 h-10 rounded-xl bg-medical-teal/10 text-medical-teal flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-phone"></i></div>
                                    <div>
                                        <strong class="text-white block">Phone Numbers</strong>
                                        <span>Main: +92 (51) 111 2872<br>Emergency 24/7: Rescue 1122</span>
                                    </div>
                                </li>
                                <li class="flex items-start space-x-4">
                                    <div class="w-10 h-10 rounded-xl bg-medical-teal/10 text-medical-teal flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-envelope"></i></div>
                                    <div>
                                        <strong class="text-white block">Email Inquiries</strong>
                                        <span>contact@aurahealth.org</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handleContactSubmit(e) {
    e.preventDefault();
    alert("Thank you for contacting Aura Health Center. Our team has received your message and will respond within 24 hours.");
    e.target.reset();
}

// Global UI Modals & Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        document.querySelector('[aria-controls="mobile-menu"]')?.setAttribute('aria-expanded', 'true');
    } else {
        menu.classList.add('hidden');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        document.querySelector('[aria-controls="mobile-menu"]')?.setAttribute('aria-expanded', 'false');
    }
}

function openAppointmentModal() {
    document.getElementById('appointment-modal').classList.remove('hidden');
}

function closeAppointmentModal() {
    document.getElementById('appointment-modal').classList.add('hidden');
}

function handleAppointmentSubmit(e) {
    e.preventDefault();
    alert("Appointment consultation request submitted successfully! Our scheduling coordinator will contact you shortly to confirm your visit.");
    closeAppointmentModal();
    e.target.reset();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app-container');
    renderPage(container ? container.dataset.page : 'home');

    const appointmentDate = document.querySelector('#appointment-form input[type="date"]');
    if (appointmentDate) {
        appointmentDate.min = new Date().toISOString().split('T')[0];
    }
});
