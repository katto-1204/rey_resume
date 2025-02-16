import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import { findNodeHandle } from "react-native";

export default function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.measureLayout(
      findNodeHandle(scrollViewRef.current),
      (x, y) => {
        scrollViewRef.current.scrollTo({ y, animated: true });
      }
    );
  };

  const scrollViewRef = useRef(null);

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Intro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Experience</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Contact</Text>
        </TouchableOpacity>
      </View>

      <View ref={aboutRef} style={styles.hero}>
        <View style={styles.textContainer}>
          <Text style={styles.h1}>Rey Humperdinck S. Arendain</Text>
          <Text style={styles.h2}>Junior Web Developer</Text>
          <Text style={styles.p}>📅 Birthday: January 1, 2000</Text>
          <Text style={styles.p}>
            📍 Address: Poblacion, Carmen, North Cotabbato
          </Text>
          <Text style={styles.p}>
            📧 Email: rey.humperdinck.arendain@hcdc.edu.ph
          </Text>
          <Text style={styles.p}>📞 Phone: +63 9084795929</Text>
        </View>
        <Image source={require("./reyprofile_bord.png")} style={styles.image} />
      </View>

      <View style={styles.card}>
        <Text style={styles.subHeading}>Web Design</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>HTML</Text>
          </View>
          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>CSS</Text>
          </View>
          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>JavaScript</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.subHeading}>Programming</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>Python</Text>
          </View>
          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>Java</Text>
          </View>
          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>C#</Text>
          </View>
          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>TypeScript</Text>
          </View>
          <View style={styles.skillBadge}>
            <Text style={styles.skillText}>React Native</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.majorsContainer}>
          <Text style={styles.major}>📚 SHS - STEM</Text>
          <Text style={styles.major}>🎓 BS INFORMATION TECHNOLOGY</Text>
        </View>

        <View ref={experienceRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>

          <View style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>
                💼 Frontend Developer at XYZ Corp
              </Text>
              <Text style={styles.expDate}>2022 - Present</Text>
            </View>
            <View style={styles.expContent}>
              <Text style={styles.expBullet}>
                ▪️ Developed the official website of Arendain Enterprises
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Led the redesign of the company’s internal dashboard
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Implemented performance optimizations, improving load times
                by 40%
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Integrated third-party APIs for seamless data synchronization
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Collaborated with UI/UX designers to enhance user experience
              </Text>
            </View>
          </View>

          <View style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>💼 Freelance Web Designer</Text>
              <Text style={styles.expDate}>2020 - 2022</Text>
            </View>
            <View style={styles.expContent}>
              <Text style={styles.expBullet}>
                ▪️ Awarded Best Web Designer of the Year in the company
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Designed and developed e-commerce websites for multiple
                clients
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Created responsive and mobile-friendly landing pages
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Assisted startups in establishing their online brand identity
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Conducted usability testing to improve design efficiency
              </Text>
            </View>
          </View>

          <View style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>💼 UI/UX Consultant</Text>
              <Text style={styles.expDate}>2018 - 2020</Text>
            </View>
            <View style={styles.expContent}>
              <Text style={styles.expBullet}>
                ▪️ Provided UX research and design consultation for startups
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Developed wireframes and prototypes for mobile apps
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Conducted A/B testing to improve user engagement rates
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Led UI/UX workshops for junior designers
              </Text>
              <Text style={styles.expBullet}>
                ▪️ Collaborated with developers to ensure design feasibility
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View ref={projectsRef} style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>

        <View style={styles.projectCard}>
          <Image
            source={require("./techhub.png")}
            style={styles.projectImage}
          />
          <View style={styles.projectInfo}>
            <Text style={styles.projectTitle}>TechVerse Hub 1</Text>
            <Text style={styles.projectDesc}>
              A futuristic tech news and gadget review website that provides
              in-depth analyses of the latest innovations, from AI breakthroughs
              to next-gen smartphones. Includes interactive comparisons and user
              discussions.
            </Text>
          </View>
        </View>

        <View style={styles.projectCard}>
          <Image source={require("./nexus.png")} style={styles.projectImage} />
          <View style={styles.projectInfo}>
            <Text style={styles.projectTitle}>NEXUS FitSync</Text>
            <Text style={styles.projectDesc}>
              A fitness tracking website that syncs with wearable devices,
              allowing users to monitor workouts, set goals, and join community
              challenges. Features personalized recommendations and AI-generated
              fitness insights.
            </Text>
          </View>
        </View>

        <View style={styles.projectCard}>
          <Image
            source={require("./portfolio.png")}
            style={styles.projectImage}
          />
          <View style={styles.projectInfo}>
            <Text style={styles.projectTitle}>CyberPortfolio</Text>
            <Text style={styles.projectDesc}>
              A sleek and modern portfolio website for developers and designers,
              featuring interactive project showcases, 3D animations, and
              AI-powered resume optimization.
            </Text>
          </View>
        </View>
      </View>

      <View ref={contactRef} style={styles.contactContainer}>
        <Text style={styles.sectionTitle}>Contact Me</Text>

        <TextInput style={styles.input} placeholder="Your Name" />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Your Message"
          multiline
        />

        <TouchableOpacity
          style={styles.solidButton}
          onPress={() => alert("Message sent")}
        >
          <Text style={styles.buttonTextSolid}>Send Message</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Rey Humperdinck Arendain. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  navbar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    elevation: 5,
  },
  navContainer: {
    flexDirection: "row",
  },
  navButton: {
    backgroundColor: "#3D5AFE", // Turns white
    //borderWidth: 2,
    //borderColor: "#3D5AFE",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#3D5AFE",
    marginHorizontal: 6, // Adds space between buttons
  },
  navText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  navButtonPressed: {
    backgroundColor: "#fff", // Turns white
    borderWidth: 2,
    borderColor: "#3D5AFE",
  },
  navTextPressed: {
    color: "#3D5AFE", // Text turns blue
  },
  hero: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },
  textContainer: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 60,
    alignItems: "flex-start",
  },
  h1: { fontSize: 30, fontWeight: "bold", color: "#111", textAlign: "left" },
  p: { fontSize: 13, color: "black", marginTop: 10, textAlign: "left" },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  outlineButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#3D5AFE",
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10,
    alignSelf: "flex-start",
  },
  solidButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#3D5AFE",
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  buttonTextOutline: { color: "#3D5AFE", fontSize: 16, fontWeight: "bold" },
  buttonTextSolid: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  image: { paddingRight: 70, width: 300, height: 300, borderRadius: 10 },

  section: {
    padding: 50,
    backgroundColor: "#f8f9fa",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    margin: 55,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#007BFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
    alignItems: "center",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8, // Adds space between items
  },
  skillBadge: {
    backgroundColor: "#3D5AFE",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20, // Rounded shape
    marginBottom: 5,
  },
  skillText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  projectItem: {
    fontSize: 16,
    color: "#444",
    marginVertical: 5,
    textAlign: "left",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    textAlign: "left",
  },

  footer: {
    backgroundColor: "#3D5AFE", // Dark theme for a sleek look
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#444",
  },

  footerText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 10,
  },

  socialIcons: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 15,
  },

  socialIcon: {
    width: 30,
    height: 30,
  },

  backToTop: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  backToTopText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },

  h2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3D5AFE",
    textAlign: "left",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  projectCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Center vertically
  },

  projectImage: {
    width: 130, // Scaled-up image
    height: 130,
    resizeMode: "cover", // Fill the image properly
    marginRight: 15, // Space between image and text
    borderRadius: 10, // Rounded edges
    borderWidth: 2, // Outline thickness
    borderColor: "#007BFF", // Blue outline
  },

  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  projectInfo: {
    flex: 1, // Takes up remaining space
    alignItems: "flex-start", // Ensures text starts from the left
  },

  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left", // Explicitly set text alignment
  },

  projectDesc: {
    fontSize: 14,
    color: "#555",
    textAlign: "left", // Ensures description is aligned properly
  },

  section: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#222",
  },
  majorsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3D5AFE",
    // borderWidth: 2,
    //  borderColor: "#3D5AFE",
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  major: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  expBlock: {
    backgroundColor: "#f4f4f4",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    elevation: 2,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  expTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  expDate: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#3D5AFE",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  expContent: {
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#007BFF",
    marginTop: 5,
  },
  expBullet: {
    fontSize: 16,
    marginBottom: 3,
    color: "#333",
  },
  projectDesc: {
    fontSize: 14, // ✅ Ensure semicolon
    color: "#555", // ✅ Ensure semicolon
    textAlign: "center",
  },

  contactContainer: {
    padding: 20,
    alignItems: "center",
  },

  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 10, // Rounded edges
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
    marginBottom: 15, // Space between inputs
  },

  solidButton: {
    backgroundColor: "#3D5AFE",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  buttonTextSolid: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
