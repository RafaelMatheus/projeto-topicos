package br.com.topicos.utils;

public class Utils {
	public static String removerCaracteresEspeciais(String valor) {
		valor = valor.replaceAll("[באדגה]", "a");
		valor = valor.replaceAll("[ח]", "c");
		valor = valor.replaceAll("'","");
		return valor;
	}
}
