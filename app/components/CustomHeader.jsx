import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CustomHeader({ title, showBackButton }) {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      
      {/* LADO ESQUERDO: Botão Voltar ou Espaço Vazio */}
      {/* Usamos uma View com largura fixa para equilibrar o layout */}
      <View style={styles.sideContainer}>
        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
             <Image 
               source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png' }} 
               style={styles.backIcon} 
             />
          </TouchableOpacity>
        )}
      </View>

      {/* CENTRO: Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.headerTitle} numberOfLines={1}>{title}</Text>
      </View>

      {/* LADO DIREITO: Botão Coração (Abre a Sidebar) */}
      <View style={styles.sideContainer}>
        <TouchableOpacity 
          style={styles.heartButton} 
          onPress={() => navigation.openDrawer()}
        >
          <Image 
            // Ícone de coração
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }} 
            style={styles.heartIcon} 
          />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 90, // Altura fixa para o cabeçalho
    paddingTop: 40, // Espaço para a barra de status (Safe Area)
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF', // Fundo branco limpo
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6', // Linha sutil de separação
    elevation: 2, // Sombra leve no Android
    shadowColor: '#000', // Sombra leve no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    zIndex: 10,
  },
  
  // Containers laterais com largura fixa garantem que o título fique EXATAMENTE no meio
  sideContainer: {
    width: 45, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  // --- Botão Voltar (Estilo Cinza Claro) ---
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
    tintColor: '#333',
    resizeMode: 'contain',
  },

  // --- Título ---
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800', // Extra bold para destaque
    color: '#111',
    textAlign: 'center',
  },

  // --- Botão Coração (Estilo Dark com Laranja) ---
  heartButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#1A1A1A', // Fundo escuro
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  heartIcon: {
    width: 20,
    height: 20,
    tintColor: '#F97316', // Cor Laranja vibrante
    resizeMode: 'contain',
  },
});