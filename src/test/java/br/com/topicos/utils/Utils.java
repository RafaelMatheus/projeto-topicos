package br.com.topicos.utils;

public class Utils {
	public static String removerCaracteresEspeciais(String valor) {
		valor = valor.replaceAll("[�����]", "a");
		valor = valor.replaceAll("[�]", "c");
		valor = valor.replaceAll("'","");
		return valor;
	}
}
