import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function HomeView() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>
      <Text style={styles.subtitle}>Selecione uma categoria:</Text>

      {/* 🔹 ENTIDADE PERFIL */}
      <Pressable style={[styles.card, styles.cardPerfil]} onPress={()=>router.push("/view/perfilView")}>
        <Text style={styles.cardIcon}>👤</Text>
        <Text style={styles.cardTitle}>Perfil</Text>
        <Text style={styles.cardDesc}>Gerencie suas informações pessoais, preferências e notificações.</Text>
      </Pressable>

      {/* 🔹 ENTIDADE HÁBITOS */}
      <Pressable style={[styles.card, styles.cardHabitos]} onPress={()=>router.push(router.push("/view/habitosView")
)}>
        <Text style={styles.cardIcon}>🌱</Text>
        <Text style={styles.cardTitle}>Hábitos</Text>
        <Text style={styles.cardDesc}>Crie e acompanhe bons hábitos para melhorar sua rotina e bem-estar.</Text>
      </Pressable>

      {/* 🔹 ENTIDADE REGISTRO DE ATIVIDADES */}
      <Pressable style={[styles.card, styles.cardRegistro]} onPress={()=>router.push("/view/registroAtividadeView")}>
        <Text style={styles.cardIcon}>🗓️</Text>
        <Text style={styles.cardTitle}>Registro de Atividades</Text>
        <Text style={styles.cardDesc}>Anote e acompanhe suas atividades diárias, metas e progresso.</Text>
      </Pressable>

      {/* 🔹 ENTIDADE ATIVIDADE FÍSICA */}
      <Pressable style={[styles.card, styles.cardTreino]} onPress={()=>router.push("/view/atividadeFisicaView")}>
        <Text style={styles.cardIcon}>💪</Text>
        <Text style={styles.cardTitle}>Atividade Física / Treino</Text>
        <Text style={styles.cardDesc}>Monte seu plano de treino e registre seus exercícios físicos.</Text>
      </Pressable>

      {/* 🔹 ENTIDADE HUMOR / EMOÇÃO */}
      <Pressable style={[styles.card, styles.cardHumor]} onPress={()=>router.push("/view/humorView")}>
        <Text style={styles.cardIcon}>😊</Text>
        <Text style={styles.cardTitle}>Humor e Emoções</Text>
        <Text style={styles.cardDesc}>Registre seu humor diário e veja como suas emoções evoluem com o tempo.</Text>
      </Pressable>

      {/* 🔹 ENTIDADE CONTEÚDO / DICAS */}
      <Pressable style={[styles.card, styles.cardConteudo]} onPress={()=>router.push("/view/conteudoView")}>
        <Text style={styles.cardIcon}>📚</Text>
        <Text style={styles.cardTitle}>Conteúdo e Dicas</Text>
        <Text style={styles.cardDesc}>Leia artigos, receitas e dicas sobre alimentação e saúde mental.</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:"#F5F7FB", padding:20 },
  title:{ fontSize:24, fontWeight:"bold", marginBottom:10, textAlign:"center", color:"#333" },
  subtitle:{ fontSize:16, color:"#555", textAlign:"center", marginBottom:20 },
  
  card:{
    backgroundColor:"#fff",
    borderRadius:15,
    padding:20,
    marginBottom:15,
    shadowColor:"#000",
    shadowOpacity:0.1,
    shadowRadius:4,
    shadowOffset:{ width:0, height:2 },
  },
  cardIcon:{ fontSize:40, textAlign:"center", marginBottom:10 },
  cardTitle:{ fontSize:18, fontWeight:"bold", color:"#333", textAlign:"center", marginBottom:5 },
  cardDesc:{ fontSize:14, color:"#666", textAlign:"center" },

  cardPerfil:{ backgroundColor:"#E6F7FF" },
  cardHabitos:{ backgroundColor:"#E8FCE8" },
  cardRegistro:{ backgroundColor:"#FFF9E6" },
  cardTreino:{ backgroundColor:"#EAE6FF" },
  cardConteudo:{ backgroundColor:"#C8E6C9" },
  cardHumor:{ backgroundColor:"#FFE6E6" },
  cardTreino:{ backgroundColor:"#FFD580" },
  cardAtividades:{ backgroundColor:"#f2db0fff" },
  cardConteudo:{ backgroundColor:"#F7E6FF" },
});
